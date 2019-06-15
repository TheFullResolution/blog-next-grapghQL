import { BlogPostWhereUniqueInput, ID_Input, Prisma } from '../generated'
import { QueryResolvers, BlogPost } from '../generated/graphql'

const Query: QueryResolvers = {
  async blogPost(parent, args, ctx, info) {
    if (!args.where.id) {
      throw new Error('Missing Id')
    }

    const id = args.where.id

    const blog = await ctx.db.blogPost({ id })
    const user = await ctx.db.blogPost({ id }).user()
    const blogWithUser = blog ? { ...blog, user } : null

    return blogWithUser
  },

  async blogPosts(parent, args, ctx, info) {
    const fragment = `
          fragment BlogPostWithUser on BlogPost {
            id
            title
            body
            user {
              id
            }
          }
          `

    const blogs = await ctx.db
      .blogPosts(args as Prisma['blogPosts']['arguments'])
      .$fragment<BlogPost[]>(fragment)

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
