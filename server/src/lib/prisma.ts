import { PrismaClient } from "@prisma/client"
export const prisma = new PrismaClient({
  log: ['query'],
}) // faz conexao com o banco