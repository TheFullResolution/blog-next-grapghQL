// let's go!
require('dotenv').config({ path: 'backend/variables.env' })

const express = require('express')
const cors = require('cors')
const helmet  = require('helmet');
const cookieParser  = require('cookie-parser');
const bodyParser  = require('body-parser');
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const prisma = require('./prisma')
const { ApolloServer } = require('apollo-server-express')

const { importSchema } = require('graphql-import')

const typeDefs = importSchema('./backend/src/schema.graphql')

const DEV = process.env.NODE_ENV !== 'production';

const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URL,
} 


const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query,
  },
  introspection: DEV,
  debug: DEV,
  playground: DEV,
  context: ({ req }) => ({
    ...req,
    prisma,
  })
})

app.use(cors(corsOptions));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());

server.applyMiddleware({ app,   cors: corsOptions})

app.listen({ port: process.env.PORT || 4000 }, err => {
  console.log('\n'.repeat(10));

  if (err) throw err;
  console.log(
    `Apollo Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`
  );
});
