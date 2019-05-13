import { Field, FieldProps, Form, Formik } from 'formik'

import { Create_ItemComponent } from '../../../generated/graphql'
import { Editor } from '../../blocks/Editor/Editor'
import { Input } from '../../blocks/Input/Input'

interface CreateBlogForm {
  title: string
  body: string
}

export const CreateBlogPost = () => (
  <Create_ItemComponent>
    {createBlogPost => {
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
                  <Input<CreateBlogForm>
                    field={field}
                    label="Title"
                    error={
                      form.touched.title &&
                      form.errors.title &&
                      form.errors.title
                    }
                  />
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
  </Create_ItemComponent>
)
