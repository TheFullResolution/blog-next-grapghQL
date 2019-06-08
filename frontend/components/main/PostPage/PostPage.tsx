import { NextFC } from 'next'

import { Blog_PostQuery } from '../../../generated/graphql'
import * as styles from './postPage.scss'
import Markdown from 'markdown-to-jsx'

interface Props {
  blogPost: Blog_PostQuery['blogPost']
}

const PostPage: NextFC<Props> = ({ blogPost }) => {
  return (
    <div className={styles.container}>
      <h1>{blogPost.title}</h1>
      <Markdown>{blogPost.body}</Markdown>
    </div>
  )
}

export { PostPage }
