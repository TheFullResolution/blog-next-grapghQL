import { BlogPostWhereUniqueInput, ID_Input } from '../generated'
import { QueryResolvers } from '../generated/graphql'

const Query: QueryResolvers = {
  async blogPost(parent, args, ctx, info) {
    if (!args.where.id) {
      throw new Error('Missing Id')
    }

    const id = args.where.id

    const blog = await ctx.db.blogPost({ id })
    const user =  await ctx.db.blogPost({ id }).user()
    
    return {...blog, user}
  },

  async blogPosts(parent, args, ctx, info) {
    //type errors TODO: remove once generators fixed
    const blogs = await ctx.db.blogPosts(args as object)

    return blogs
  },

  async me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.req.userId) {
      return null
    }
    const me = await ctx.db.user({
      id: ctx.req.userId,
    })

    return me
  },
}

export { Query }
