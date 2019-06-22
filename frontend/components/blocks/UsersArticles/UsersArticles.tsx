import * as styles from './usersArticles.scss'
import { User_Blog_PostsQuery } from '../../../generated/graphql'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

interface Props {
  data: User_Blog_PostsQuery
}

const UsersArticles: React.FC<Props> = ({ data }) => {
  return (
    <ul className={styles.container}>
      {data.blogPosts.map(post => (
        <li key={post.id} className={styles.post}>
          <Link
            href={{
              pathname: '/post',
              query: { id: post.id },
            }}
          >
            <a>
              <h3>{post.title}</h3>
            </a>
          </Link>
          <Markdown>{`${post.body.substring(0, 200)}...`}</Markdown>
        </li>
      ))}
    </ul>
  )
}

export { UsersArticles }
