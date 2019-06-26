import Markdown from 'markdown-to-jsx';
import { NextFC } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

import { routes, RoutPath } from '../../../app/routes';
import { Blog_PostComponent, Blog_PostQuery } from '../../../generated/graphql';
import { Button } from '../../blocks/Button/Button';
import { DeleteBlogPost } from '../DeleteBlogPost/DeleteBlogPost';
import { Like } from '../Like/Like';
import { isLoggedIn, User } from '../User/User';
import * as styles from './postPage.scss';

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
            <p className={styles.author}>
              <FaPencilAlt /> Written by {blogPost.user.name} on{' '}
              {new Date(blogPost.createdAt).toLocaleDateString()}
            </p>
            {showAlert && (
              <DeleteBlogPost id={blogPost.id} onClose={toggleShowAlert} />
            )}
            <Like
              blogPostId={blogPost.id}
              blogPostAuthorId={blogPost.user.id}
            />
          </div>
        )
      }}
    </Blog_PostComponent>
  )
}

export { PostPage }
