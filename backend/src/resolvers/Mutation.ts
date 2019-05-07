import { MutationResolvers } from '../generated/api'

const Mutation: MutationResolvers.Type = {
  async createBlogPost(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    if (args.title && args.body) {
      const item = await ctx.db.createBlogPost({
        title: args.title,
        body: args.body,
      })

      return item
    } else return null
  },
}

export { Mutation }
