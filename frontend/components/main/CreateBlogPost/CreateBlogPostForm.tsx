import React from 'react'
import { Field, FieldProps, Form, Formik } from 'formik'
import { Editor } from '../../blocks/Editor/Editor'
import { Input } from '../../blocks/Input/Input'
import { Fieldset } from '../../blocks/Fieldset/Fieldset'
import { Button } from '../../blocks/Button/Button'
import { CreateBlogForm } from './CreateBlogPost'

import styles from './createblogpost.scss'

interface Props {
  onSubmit: (values: CreateBlogForm) => Promise<void>
  loading: boolean
  error?: string
}

const MIN_BLOG_POST_LENGTH = 920

const validate = (values: CreateBlogForm): Partial<CreateBlogForm> => {
  let errors: Partial<CreateBlogForm> = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.body) {
    errors.body = 'Required'
  } else if (values.body.length < MIN_BLOG_POST_LENGTH) {
    errors.body = `Your post is too short... You need ${MIN_BLOG_POST_LENGTH -
      values.body.length} characters more.`
  }

  return errors
}

export const CreateBlogPostForm: React.FC<Props> = ({
  onSubmit,
  loading,
  error,
}) => (
  <Formik<CreateBlogForm>
    initialValues={{
      title: '',
      body: '*Create Your Blog Post Here*',
    }}
    validate={validate}
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
                  form.touched.title && form.errors.title && form.errors.title
                }
              />
            )}
          </Field>
          <Field name="body">
            {({ field, form }: FieldProps<CreateBlogForm>) => {
              const onChange = (val: string) => {
                form.setFieldValue('body', val)
              }

              return (
                <Editor
                  handleChange={onChange}
                  value={field.value}
                  error={
                    form.touched.body && form.errors.body && form.errors.body
                  }
                />
              )
            }}
          </Field>
        </Fieldset>
        {error && <p>{error}</p>}
        <div className={styles.submit}>
          <Button type="submit" version="primary">
            Submit
          </Button>
        </div>
      </Form>
    )}
  </Formik>
)
