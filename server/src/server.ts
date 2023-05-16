import fastify from 'fastify';
import { PrismaClient } from '@prisma/client'; //importa o cliente para ser visto as infos

const app = fastify() //Cria a aplicação dentro de um servidor HTTP
const prisma = new PrismaClient() // faz conexao com o banco

app.get('/users', async() =>{ // função assincrona
  const users = await prisma.user.findMany() // lista todos os users
  return users
})

app
  .listen({
    port:3333, // a porta que esse servidor vai rodar no local
    // (promise) é algo que vai acontecer mas pode demorar
  })
  .then(() =>{
    console.log('HTTP server is on in http://localhost:3333')
  }) // o then é uma concatenação na qual faz com que retorne a ação da promise
