import Error from 'next/error';
import React from 'react';

import { PostPage } from '../components/main/PostPage/PostPage';
import { blogPostCheck, BlogPostReturn } from '../utils/blogPostCheck';
import { PageComponent } from './_app';

interface Props {
  blogPost: BlogPostReturn
}

const Post: PageComponent<Props> = ({ blogPost }) => {
  if (!blogPost) return <Error statusCode={404} />

  return <PostPage blogPost={blogPost} />
}

Post.getInitialProps = async ({ apolloClient, query, res }) => {
  const blogPost = await blogPostCheck({ apolloClient, query, res })
  return { blogPost }
}

export default Post
