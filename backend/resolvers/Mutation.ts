import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ms from 'ms';
import { MutationResolvers } from '../generated/graphql';


function errorThrow(): never {
  throw new Error('Either email or password are not correct')
}

const Mutation: MutationResolvers = {
  async createBlogPost(parent, args, ctx) {
    if (!ctx.req.userId) {
      throw new Error('You must be logged in to do that!')
    }
    if (args.title && args.body) {
      const item = await ctx.db.createBlogPost({
        title: args.title,
        body: args.body,
        user: {
          connect: {
            id: ctx.req.userId,
          },
        },
      })

      return item
    } else return null
  },

  async signin(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.user({ email })

    if (!user) {
      return errorThrow()
    }
    const valid = await bcrypt.compare(password, user.password)
    // 2. Check if their password is correct
    if (!valid) {
      return errorThrow()
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    // 4. Set the cookie with the token
    ctx.req.cookie('token', token, {
      httpOnly: true,
      maxAge: ms('1y'),
    })
    // 5. Return the user
    return user
  },
}

export { Mutation }
