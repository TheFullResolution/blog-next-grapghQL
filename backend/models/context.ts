import { Request } from 'express'
import { Prisma } from '../generated';


export interface Context {
  req: Request
  db: Prisma
}
