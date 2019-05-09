import { QueryResolvers } from '../generated/api'
import { BlogPostWhereUniqueInput } from '../generated'

const Query: QueryResolvers.Type = {
  async blogPost(parent, args, ctx, info) {
    //type errors TODO: remove once generators fixed
    const newArgs = args as unknown
    const blog = await ctx.db.blogPost(newArgs as BlogPostWhereUniqueInput)

    return blog
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
    return await ctx.db.user({
      id: ctx.req.userId,
    })
  },
}

export { Query }
