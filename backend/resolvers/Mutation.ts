import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import ms from 'ms'
import { MutationResolvers } from '../generated/graphql'
import { TOKEN } from '../index';

function errorThrow(): never {
  throw new Error('Either email or password are not correct')
}

const Mutation: MutationResolvers = {
  async createBlogPost(parent, args, ctx) {
    if (!ctx.req.userId) {
      throw new Error('You must be logged in to do that!')
    }

    console.log({ args })

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

  async login(parent, { email, password }, ctx, info) {
    const user = await ctx.db.user({ email: email.toLowerCase() })

    if (!user) {
      return errorThrow()
    }
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return errorThrow()
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

    ctx.res.cookie(TOKEN, token, {
      httpOnly: true,
      maxAge: ms('1y'),
    })
    return user
  },

  logout(parent, args, ctx, info) {
    ctx.res.clearCookie(TOKEN)
    return { message: 'Goodbye!' }
  },

  async signup(parent, { email, password, name }, ctx, info) {
    const lowercaseEmail = email.toLowerCase()
    const hashPassword = await bcrypt.hash(password, 10)

    const user = await ctx.db.createUser({
      email: lowercaseEmail,
      name,
      password: hashPassword,
      permissions: { set: ['USER'] },
    })

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

    ctx.res.cookie(TOKEN, token, {
      httpOnly: true,
      maxAge: ms('1y'),
    })

    return user
  },
}

export { Mutation }
