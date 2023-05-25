import fastify from 'fastify'; // cria os conceitos de GET,POST,READ,PATCH dentro do node
import { memoriesRoutes } from './routes/memories';
import cors from '@fastify/cors'
//import { PrismaClient } from '@prisma/client'; //importa o cliente para ser visto as infos

const app = fastify() //Cria a aplicação dentro de um servidor HTTP
//const prisma = new PrismaClient() // faz conexao com o banco

app.register(memoriesRoutes)

app.register(cors, {
  origin: true //todas urls podem acessar

})
app
  .listen({
    port:3333, // a porta que esse servidor vai rodar no local
    // (promise) é algo que vai acontecer mas pode demorar
  })
  .then(() =>{
    console.log('HTTP server is on in http://localhost:3333')
  }) // o then é uma concatenação na qual faz com que retorne a ação da promise de outro modo
