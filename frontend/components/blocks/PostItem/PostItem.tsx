import * as styles from './postItem.scss'
import { All_Blog_PostsQuery } from '../../../generated/graphql'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

interface Props {
  post: All_Blog_PostsQuery['blogPosts'][0]
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Markdown>{post.body}</Markdown>
        <div className={styles.hide}></div>
      </div>
      <Link
        href={{
          pathname: '/post',
          query: { id: post.id },
        }}
      >
        <a>Read now: {post.title}</a>
      </Link>
    </div>
  )
}

export { PostItem }
