
import { BlogPostWhereUniqueInput } from '../generated'
import { QueryResolvers } from '../generated/graphql';

const Query: QueryResolvers = {
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
    const me =  await ctx.db.user({
      id: ctx.req.userId,
    })
    
    return me
  },
}

export { Query }
