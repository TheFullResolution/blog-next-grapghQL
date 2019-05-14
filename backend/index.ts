require('dotenv').config({ path: 'backend/variables.env' })

import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { importSchema } from 'graphql-import'
import helmet from 'helmet'
import jwt from 'jsonwebtoken'
import { prisma } from './generated'
import { Mutation } from './resolvers/Mutation'
import { Query } from './resolvers/Query'

// let's go!

const typeDefs = importSchema('./backend/schema.graphql')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Mutation,
    Query,
  },
})

const DEV = process.env.NODE_ENV !== 'production'

const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URL,
}

const app = express()

const server = new ApolloServer({
  schema,
  introspection: DEV,
  debug: DEV,
  playground: DEV,
  context: ({ req, res }) => ({
    req,
    res,
    db: prisma,
  }),
})

app.use(cors(corsOptions))
app.use(helmet())
app.use(cookieParser())

app.use((req, res, next) => {
  const { token } = req.cookies
  if (token && process.env.APP_SECRET) {
    console.log(token)

    const tokenData = jwt.verify(token, process.env.APP_SECRET)
    req.userId = (tokenData as { userId: string }).userId
  }
  next()
})

app.use(async (req, res, next) => {
  if (!req.userId) return next()

  const user = await prisma.user({ id: req.userId })
  if (user) {
    req.user = user
  }
  next()
})

server.applyMiddleware({ app, cors: corsOptions })

app.listen({ port: process.env.PORT || 4000 }, (err: Error) => {
  console.log('\n'.repeat(5))

  if (err) throw err
  console.log(
    `Apollo Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`,
  )
})
