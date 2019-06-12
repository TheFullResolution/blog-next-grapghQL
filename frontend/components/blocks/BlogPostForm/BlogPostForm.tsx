import React, { Children } from 'react'
import { Field, FieldProps, Form, Formik } from 'formik'
import { Editor } from '../../blocks/Editor/Editor'
import { Input } from '../../blocks/Input/Input'
import { Fieldset } from '../../blocks/Fieldset/Fieldset'
import { Button } from '../../blocks/Button/Button'

import styles from './blogPostForm.scss'

export interface BlogFormValues {
  title: string
  body: string
}

interface Props {
  onSubmit: (values: BlogFormValues) => Promise<void>
  loading: boolean
  error?: string
  initialValues?: BlogFormValues
}

const MIN_BLOG_POST_LENGTH = 920

const validate = (values: BlogFormValues): Partial<BlogFormValues> => {
  let errors: Partial<BlogFormValues> = {}
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

export const BlogPostForm: React.FC<Props> = ({
  onSubmit,
  loading,
  error,
  children,
  initialValues = {
    title: '',
    body: '*Create Your Blog Post Here*',
  },
}) => (
  <Formik<BlogFormValues>
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}
  >
    {() => (
      <Form>
        <Fieldset loading={loading}>
          <Field name="title">
            {({ field, form }: FieldProps<BlogFormValues>) => (
              <Input<BlogFormValues>
                field={field}
                label="Title"
                error={
                  form.touched.title && form.errors.title && form.errors.title
                }
              />
            )}
          </Field>
          <Field name="body">
            {({ field, form }: FieldProps<BlogFormValues>) => {
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
          {children}
        </div>
      </Form>
    )}
  </Formik>
)
