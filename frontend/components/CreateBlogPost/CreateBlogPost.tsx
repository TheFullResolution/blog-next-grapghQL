import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Formik, Form, Field, FieldProps } from 'formik'
import { Editor } from '../Editor/Editor'
import { createBlogPost } from '../../../_types/data';

interface CreateBlogForm {
  title: string
  body: string
}

interface MutationData {
  createBlogPost: createBlogPost
}

const CREATE_BLOG_POST_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION($title: String!, $body: String!) {
    createBlogPost(title: $title, body: $body) {
      id
    }
  }
`

export const CreateBlogPost = () => (
  <Mutation<MutationData> mutation={CREATE_BLOG_POST_MUTATION}>
    {(createBlogPost) => {
      const onSubmit = async (values: CreateBlogForm) => {
        await createBlogPost({
          variables: {
            title: values.title,
            body: values.body,
          },
        })
      }
      return (
        <Formik initialValues={{ title: '', body: '' }} onSubmit={onSubmit}>
          {() => (
            <Form>
              <Field name="title">
                {({ field, form }: FieldProps<CreateBlogForm>) => (
                  <div>
                    <input
                      type="text"
                      {...field}
                      placeholder="Title of the Post"
                    />
                    {form.touched.title &&
                      form.errors.title &&
                      form.errors.title}
                  </div>
                )}
              </Field>
              <Field name="body">
                {({ field }: FieldProps<CreateBlogForm>) => (
                  <div>
                    <Editor handleChange={field.onChange} />
                  </div>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      )
    }}
  </Mutation>
)
