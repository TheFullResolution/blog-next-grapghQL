import { withRouter } from 'next/router'

import { routes, RoutPath } from '../../../app/routes'
import {
  Blog_PostQuery,
  Update_Blog_PostComponent,
  Blog_PostDocument,
} from '../../../generated/graphql'
import {
  BlogFormValues,
  BlogPostForm,
} from '../../blocks/BlogPostForm/BlogPostForm'
import Link from 'next/link'
import { Button } from '../../blocks/Button/Button'

interface Props {
  id: string
  blogPost: Blog_PostQuery['blogPost']
}

function getRefetchQuery(blogPostId: string) {
  return {
    query: Blog_PostDocument,
    variables: { id: blogPostId },
  }
}


const UpdateBlogPost = withRouter<Props>(function EditBlogPostComponent({
  router,
  id,
  blogPost,
}) {
  return (
    <Update_Blog_PostComponent refetchQueries={[getRefetchQuery(blogPost.id)]}>
      {(updateBlogPost, { error, loading }) => {
        const onSubmit = async (values: BlogFormValues) => {
          const post = await updateBlogPost({
            variables: {
              id,
              title: values.title,
              body: values.body,
            },
          })

          if (post && post.data && post.data.updateBlogPost.id && router) {
            router.push({
              pathname: `/${routes[RoutPath.post].path}`,
              query: { id: post.data.updateBlogPost.id },
            })
          }
        }

        return (
          <BlogPostForm
            onSubmit={onSubmit}
            error={error && error.message}
            loading={loading}
            initialValues={{
              title: blogPost.title,
              body: blogPost.body,
            }}
          >
            <Link
              href={{
                pathname: `/${routes[RoutPath.post].path}`,
                query: { id },
              }}
            >
              <Button version="secondary" type="link">
                Cancel
              </Button>
            </Link>
          </BlogPostForm>
        )
      }}
    </Update_Blog_PostComponent>
  )
})

export { UpdateBlogPost }
