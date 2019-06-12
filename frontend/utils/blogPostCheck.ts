/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Blog_PostQuery,
  Blog_PostQueryVariables,
  Blog_PostDocument,
} from '../generated/graphql'
import { ApolloClient } from 'apollo-boost'
import { ServerResponse } from 'http'

export type BlogPostReturn = Blog_PostQuery['blogPost'] | undefined

interface Params {
  query: Record<string, string | string[] | undefined>
  apolloClient: ApolloClient<any>
  res: ServerResponse | undefined
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function queryIdiSValid(id: any): id is string {
  return id && typeof id === 'string'
}

export async function blogPostCheck({ query, apolloClient, res }: Params) {
  const id = queryIdiSValid(query.id) && query.id

  let blogPost: BlogPostReturn

  if (id) {
    const { data } = await apolloClient.query<
      Blog_PostQuery,
      Blog_PostQueryVariables
    >({
      query: Blog_PostDocument,
      variables: { id },
    })
    blogPost = data && data.blogPost
  }
  if (!blogPost && res) res.statusCode = 404
  return blogPost 
}
