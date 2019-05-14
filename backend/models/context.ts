import { Request, Response } from 'express'
import { Prisma } from '../generated';

export interface Context {
  req: Request
  res: Response
  db: Prisma
}
