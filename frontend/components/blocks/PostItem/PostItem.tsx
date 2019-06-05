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
      <Link
        href={{
          pathname: '/post',
          query: { id: post.id },
        }}
      >
        <a>
          <h1>{post.title}</h1>
        </a>
      </Link>
      <Markdown>{post.body}</Markdown>
    </div>
  )
}

export { PostItem }
