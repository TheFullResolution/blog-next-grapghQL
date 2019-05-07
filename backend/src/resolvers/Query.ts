import { forwardTo } from 'prisma-binding'
import { QueryResolvers } from '../generated/api';

const Query: QueryResolvers.Type  = {
  blogPost: forwardTo('db'),
  
  async blogPosts(parent, args, ctx, info) {

    const blogs = await ctx.db.blogPosts(args)

    return blogs
  },
}

export { Query }
