import { Prisma } from '../generated'
import { BlogPost, Like, QueryResolvers } from '../generated/graphql'

const Query: Required<QueryResolvers> = {
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
            createdAt
            updatedAt
            user {
              id
              name
            }
          }
          `

    const blogs = await ctx.db
      .blogPosts(args as Prisma['blogPosts']['arguments'])
      .$fragment<BlogPost[]>(fragment)

    return blogs
  },

  async blogPostsConnection(parent, args, ctx, info) {
    const pageInfo = await ctx.db
      .blogPostsConnection(args as Prisma['blogPostsConnection']['arguments'])
      .pageInfo()
    const aggregate = await ctx.db
      .blogPostsConnection(args as Prisma['blogPostsConnection']['arguments'])
      .aggregate()

    return { pageInfo, aggregate }
  },

  async likes(parent, args, ctx, info) {
    const fragment = `
    fragment LikesWithPostAndUser on Like {
      id
      user {
        id
      }
      blogPost {
        id
        title
        body
      }
    }
    `

    const likes = await ctx.db
      .likes(args as Prisma['likes']['arguments'])
      .$fragment<Like[]>(fragment)

    return likes
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
