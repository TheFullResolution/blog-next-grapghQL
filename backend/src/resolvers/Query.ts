import { forwardTo } from 'prisma-binding'

const Query = {
  blogPost: forwardTo('prisma'),
  blogPosts: forwardTo('prisma'),
}

export { Query }
