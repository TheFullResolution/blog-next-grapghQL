/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser'
import { User } from './src/generated'
import { CookieOptions } from 'express';

declare global {
  namespace Express {
    interface Request {
      userId?: string
      user?: User
      cookie: (cookie: unknown, object: unknown, options: CookieOptions) => void
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      FRONTEND_URL: string
      PRISMA_ENDPOINT: string
      PRISMA_SECRET: string
      APP_SECRET: string
      STRIPE_SECRET: string
      PORT: 4444
    }
  }
}
