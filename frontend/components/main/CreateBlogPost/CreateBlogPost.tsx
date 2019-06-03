import { Create_ItemComponent } from '../../../generated/graphql'
import { CreateBlogPostForm } from './CreateBlogPostForm'

export interface CreateBlogForm {
  title: string
  body: string
}

export const CreateBlogPost: React.FC = () => (
  <Create_ItemComponent>
    {(createBlogPost, { error, loading }) => {
      const onSubmit = async (values: CreateBlogForm) => {
        const post = await createBlogPost({
          variables: {
            title: values.title,
            body: values.body,
          },
        })

        console.log({ post })
      }
      return (
        <CreateBlogPostForm
          onSubmit={onSubmit}
          error={error && error.message}
          loading={loading}
        />
      )
    }}
  </Create_ItemComponent>
)
