import {
  BlogPostForm,
  BlogFormValues,
} from '../../blocks/BlogPostForm/BlogPostForm'
import { withRouter } from 'next/router'
import { routes, RoutPath } from '../../../app/routes'
import { Create_Blog_PostComponent } from '../../../generated/graphql';

export const CreateBlogPost = withRouter(function CreateBlogPostComponent({
  router,
}) {
  return (
    <Create_Blog_PostComponent>
      {(createBlogPost, { error, loading }) => {
        const onSubmit = async (values: BlogFormValues) => {
          const post = await createBlogPost({
            variables: {
              title: values.title,
              body: values.body,
            },
          })

          if (post && post.data && post.data.createBlogPost.id && router) {
              router.push({
                pathname: `/${routes[RoutPath.post].path}`,
                query: {  ...router.query, id: post.data.createBlogPost.id },
              })
          }
        }
        return (
          <BlogPostForm
            onSubmit={onSubmit}
            error={error && error.message}
            loading={loading}
          />
        )
      }}
    </Create_Blog_PostComponent>
  )
})
