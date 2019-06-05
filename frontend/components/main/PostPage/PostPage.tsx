import { NextFC } from 'next'

import { Blog_PostQuery } from '../../../generated/graphql'
import * as styles from './postPage.scss'

interface Props {
  blogPost: Blog_PostQuery['blogPost']
}

const PostPage: NextFC<Props> = ({ blogPost }) => {
  return <div className={styles.container}>{blogPost.title}</div>
}

export { PostPage }
