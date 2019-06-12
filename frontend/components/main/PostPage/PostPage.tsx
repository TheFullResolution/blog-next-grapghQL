import { NextFC } from 'next'

import { Blog_PostQuery } from '../../../generated/graphql'
import * as styles from './postPage.scss'
import Markdown from 'markdown-to-jsx'
import { User, isLoggedIn } from '../User/User'
import Link from 'next/link'
import { Button } from '../../blocks/Button/Button'
import { routes, RoutPath } from '../../../app/routes'

interface Props {
  blogPost: Blog_PostQuery['blogPost']
}

const PostPage: NextFC<Props> = ({ blogPost }) => {
  return (
    <div className={styles.container}>
      <User>
        {({ payload }) => {
          const { data } = payload
          if (isLoggedIn(data) && data.me.id === blogPost.user.id) {
            return (
              <div>
                <Link
                  href={{
                    pathname: `/${routes[RoutPath.update].path}`,
                    query: { id: blogPost.id },
                  }}
                >
                  <Button version="primary" type="link">Update Post</Button>
                </Link>
              </div>
            )
          }

          return null
        }}
      </User>
      <h1>{blogPost.title}</h1>
      <Markdown>{blogPost.body}</Markdown>
    </div>
  )
}

export { PostPage }
