// let's go!
require('dotenv').config({ path: 'backend/variables.env' })

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { Mutation } from './resolvers/Mutation'
import { Query } from './resolvers/Query'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import { prisma } from './generated';

const typeDefs = importSchema('./backend/src/schema.graphql')

const DEV = process.env.NODE_ENV !== 'production'

const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URL,
}

const app = express()

const server = new ApolloServer({
  //@ts-ignore
  typeDefs,
  //@ts-ignore
  resolvers: {
    Mutation,
    Query,
  },
  introspection: DEV,
  debug: DEV,
  playground: DEV,
  context: ({ req }) => ({
    req,
    db: prisma,
  }),
})

app.use(cors(corsOptions))
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json())

server.applyMiddleware({ app, cors: corsOptions })

app.listen({ port: process.env.PORT || 4000 }, (err: any) => {
  console.log('\n'.repeat(10))

  if (err) throw err
  console.log(
    `Apollo Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`,
  )
})
