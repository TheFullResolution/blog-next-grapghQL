import React from 'react'
import { PageComponent } from './_app'
import { PostPage } from '../components/main/PostPage/PostPage'
import {
  Blog_PostDocument,
  Blog_PostQuery,
  Blog_PostQueryVariables,
} from '../generated/graphql'
import Error from 'next/error'

type BlogPostReturn = Blog_PostQuery['blogPost'] | undefined

interface Props {
  blogPost: BlogPostReturn
}

const Post: PageComponent<Props> = ({ blogPost }) => {
  if (!blogPost) return <Error statusCode={404} />

  return <PostPage blogPost={blogPost} />
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function queryIdiSValid(id: any): id is string {
  return id && typeof id === 'string'
}

Post.getInitialProps = async ({ apolloClient, query, res }) => {
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
  return { blogPost }
}

export default Post
