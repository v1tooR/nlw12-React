import { FastifyInstance } from "fastify";
import { z } from "zod";
import axios from 'axios';
import { prisma } from "../lib/prisma";

//Uma função assincrona que consegue registrar uma nova rota para autenticação
export async function authRoutes(app: FastifyInstance){

  // faz a requisição para chamar o codigo, garantindo a partir do zod
  app.post('/register', async (request) => {
    //garante a partir do corpo a requisição do codigo
    const bodySchema = z.object({
      code:z.string(),
    })

    const { code } = bodySchema.parse(request.body)
    // axios faz requesições
    const accessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      null, //corpo da requisição = nao tem
      {
        params: { //config da requisição
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: { // cabeçalhos, metadados da requisição
          Accept: 'application/json' //retornar em json
        }
      }
    )

    const { access_token } = accessTokenResponse.data

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${ //leitura do codigo
          access_token
        }` // uma requisição que faz a coleta dos dados do perfil do git
      }
    })

    const userSchema = z.object({
      id: z.number(),
      login:z.string(),
      name: z.string(),
      avatar_url: z.string().url()
    })

    const userInfo = userSchema.parse(userResponse.data)

    let user = await prisma.user.findUnique({
      where: {
        githubId: userInfo.id,
      }
    })

    if (!user){
      user = await prisma.user.create({
        data:{
          githubId: userInfo.id,
          login: userInfo.login,
          name: userInfo.name,
          avatarUrl: userInfo.avatar_url
        }
      })
    }

    const token = app.jwt.sign({
      name: user.name,
      avatarUrl: user.avatarUrl
    },/**1 objeto */ {
      sub: user.id,
      expiresIn: '30 days',
    })/**2 objeto */

    return {
      token, 
    }
  })
}