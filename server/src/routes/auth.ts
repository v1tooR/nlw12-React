import { FastifyInstance } from "fastify";
import { z } from "zod";
import axios from 'axios';

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

    return {
      access_token, //27:40
    }
  })
}