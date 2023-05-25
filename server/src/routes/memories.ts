import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma';
import { z } from 'zod'

export async function memoriesRoutes(app: FastifyInstance){
/**METODO LISTA */
  app.get('/memories', async() =>{ // listagem da memoria
    const memories = await prisma.memory.findMany({
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
  app.get('/memories/:id', async(request) =>{ // detalhes da memoria
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

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
        userId: '68349809-1588-4e71-8a74-5536acbb8176',
      }
    })
    return memory
  })
/**METODO UPDATE */
  app.put('/memories/:id', async(request) =>{ // atualizar as memorias
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

    const memory = await prisma.memory.update({
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
  app.delete('/memories/:id', async(request) =>{ // apagar memorias
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    const memory = await prisma.memory.delete({
      where: {
        id,
      },
    })

    return memory
  })
}