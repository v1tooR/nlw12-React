import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma';
import { z } from 'zod'

export async function memoriesRoutes(app: FastifyInstance){
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
    //garante na requisição se esta vindo o token
  })
    
  /**METODO LISTA */
  app.get('/memories', async(request) =>{ // listagem da memoria

    const memories = await prisma.memory.findMany({
      where:{
        userId: request.user.sub,
      },
      orderBy: {
        createdAt: 'asc', //crescente
      },
    })

    return memories.map(memory =>{
      return{
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...')
      }
    })
  })
/**METODO DETALHES */
  app.get('/memories/:id', async(request, reply) =>{ // detalhes da memoria
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (!!memory.isPublic && memory.userId !== request.user.sub ){
      return reply.status(401).send()
    } // reply é um parametro de envio de dados

    return memory
  })
/**METODO CREATE */
  app.post('/memories/:id', async(request) =>{ // criação de memorias
    const bodySchema = z.object({
      content: z.string().uuid(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, isPublic, coverUrl } = bodySchema.parse(request.body)
    const memory = await prisma.memory.create({
      data:{
        content,
        isPublic,
        coverUrl,
        userId: request.user.sub,
      }
    })
    return memory
  })
/**METODO UPDATE */
  app.put('/memories/:id', async(request, reply) =>{ // atualizar as memorias
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    
    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string().uuid(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })
    const { content, isPublic, coverUrl } = bodySchema.parse(request.body)

    let memory = await prisma.memory.findUniqueOrThrow({
      where:{
        id,
      }
    })

    if (memory.userId !== request.user.sub){
      return reply.status(401).send()
    }

    memory = await prisma.memory.update({
      where:{
        id,
      },
      data: {
        content,
        isPublic,
        coverUrl,
      }
    })
    return memory
  })
/**METODO DELETE */
  app.delete('/memories/:id', async(request, reply) =>{ // apagar memorias
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    
    const memory = await prisma.memory.findUniqueOrThrow({
      where:{
        id,
      }
    })

    if (memory.userId !== request.user.sub){
      return reply.status(401).send()
    }
    
    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
} 

//let myTime = 44