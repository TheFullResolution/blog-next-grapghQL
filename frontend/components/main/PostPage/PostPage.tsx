import { NextFC } from 'next'

import { Blog_PostQuery, Blog_PostComponent } from '../../../generated/graphql'
import * as styles from './postPage.scss'
import Markdown from 'markdown-to-jsx'
import { User, isLoggedIn } from '../User/User'
import Link from 'next/link'
import { Button } from '../../blocks/Button/Button'
import { routes, RoutPath } from '../../../app/routes'
import { useState } from 'react'
import { DeleteBlogPost } from '../DeleteBlogPost/DeleteBlogPost'
import { Like } from '../Like/Like'

interface Props {
  blogPost: Blog_PostQuery['blogPost']
}

const PostPage: NextFC<Props> = ({ blogPost: blogPostInitial }) => {
  const [showAlert, setShowAlert] = useState(false)
  const toggleShowAlert = () => {
    setShowAlert(prevState => !prevState)
  }
  return (
    <Blog_PostComponent variables={{ id: blogPostInitial.id }}>
      {({ data: blogPostData }) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { blogPost } = blogPostData!
        return (
          <div className={styles.container}>
            <User>
              {({ payload }) => {
                const { data } = payload
                if (isLoggedIn(data) && data.me.id === blogPost.user.id) {
                  return (
                    <div className={styles.buttons}>
                      <Link
                        href={{
                          pathname: `/${routes[RoutPath.update].path}`,
                          query: { id: blogPost.id },
                        }}
                      >
                        <Button version="primary" type="link">
                          Update Post
                        </Button>
                      </Link>
                      <Button version="secondary" onClick={toggleShowAlert}>
                        Delete Post
                      </Button>
                    </div>
                  )
                }
                return null
              }}
            </User>

            <Markdown>{blogPost.body}</Markdown>
            {showAlert && (
              <DeleteBlogPost id={blogPost.id} onClose={toggleShowAlert} />
            )}
            <Like blogPostId={blogPost.id} />
          </div>
        )
      }}
    </Blog_PostComponent>
  )
}

export { PostPage }
