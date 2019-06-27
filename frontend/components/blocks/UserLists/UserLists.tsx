import Link from 'next/link'

import {
  User_Blog_PostsQuery,
  User_LikesQuery,
} from '../../../generated/graphql'
import * as styles from './userLists.scss'

function dataIsBlogPostsQuery(
  data: User_Blog_PostsQuery | User_LikesQuery,
): data is User_Blog_PostsQuery {
  return 'blogPosts' in data
}

interface ListItemProps {
  id: string
  title: string
}

const UserListItem: React.FC<ListItemProps> = ({ id, title }) => (
  <li className={styles.post}>
    <Link
      href={{
        pathname: '/post',
        query: { id },
      }}
    >
      <a>{title}</a>
    </Link>
  </li>
)
interface Props {
  data: User_Blog_PostsQuery | User_LikesQuery
}

const UserLists: React.FC<Props> = ({ data }) => (
  <ul className={styles.container}>
    {dataIsBlogPostsQuery(data)
      ? data.blogPosts.map(post => (
          <UserListItem
            key={post.id}
            id={post.id}
            title={post.title}
          />
        ))
      : data.likes.map(like => (
          <UserListItem
            key={like.id}
            id={like.blogPost.id}
            title={like.blogPost.title}
          />
        ))}
  </ul>
)

export { UserLists }
