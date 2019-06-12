import React from 'react'
import { BlogPostReturn, blogPostCheck } from '../utils/blogPostCheck'
import { PageComponent } from './_app'
import Error from 'next/error'
import { UpdateBlogPost } from '../components/main/UpdateBlogPost/UpdateBlogPost'

interface Props {
  blogPost: BlogPostReturn
}

const Update: PageComponent<Props> = ({ blogPost }) => {
  if (!blogPost) return <Error statusCode={404} />

  return <UpdateBlogPost blogPost={blogPost} id={blogPost.id} />
}

Update.getInitialProps = async ({ apolloClient, query, res }) => {
  const blogPost = await blogPostCheck({ apolloClient, query, res })
  return { blogPost }
}

export default Update
