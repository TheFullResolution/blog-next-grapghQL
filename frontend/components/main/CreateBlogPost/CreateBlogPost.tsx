import { Field, FieldProps, Form, Formik } from 'formik'

import { Create_ItemComponent } from '../../../generated/graphql'
import { Editor } from '../../blocks/Editor/Editor'
import { Input } from '../../blocks/Input/Input'
import { Fieldset } from '../../blocks/Fieldset/Fieldset'

interface CreateBlogForm {
  title: string
  body: string
}

export const CreateBlogPost = () => (
  <Create_ItemComponent>
    {(createBlogPost, { error, loading }) => {
      const onSubmit = async (values: CreateBlogForm) => {
        const post = await createBlogPost({
          variables: {
            title: values.title,
            body: values.body,
          },
        })

        console.log({post});
        
      }
      return (
        <Formik<CreateBlogForm>
          initialValues={{ title: '', body: '' }}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <Fieldset loading={loading}>
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
                  {({ form }: FieldProps<CreateBlogForm>) => {

                   const onChange = (val: string)  => {
                     form.setFieldValue('body', val)
                   }
                  return (
                    <div>
                      <Editor handleChange={onChange} />
                    </div>
                  )}}
                </Field>
              </Fieldset>
              {error && <p>{error.message}</p>}
              <button type="submit">SUBMIT</button>
            </Form>
          )}
        </Formik>
      )
    }}
  </Create_ItemComponent>
)
