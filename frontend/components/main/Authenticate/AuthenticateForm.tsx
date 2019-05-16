import { Formik, Form, FieldProps, Field } from 'formik'
import { Fieldset } from '../../blocks/Fieldset/Fieldset'
import { Input } from '../../blocks/Input/Input'
import { strEnumHelper } from '../../../utils/strEnumHelper'
import { ApolloError } from 'apollo-boost'
import { Button } from '../../blocks/Button/Button'
import * as styles from './authenticate.scss'
import { AUTH_STATE } from './auth.types'

const FIELDS = strEnumHelper(['email', 'name', 'password'])
type FIELDS = keyof typeof FIELDS

export interface AuthForm {
  email: string
  name?: string
  password: string
}

interface Props {
  onSubmit: (values: AuthForm) => Promise<void>
  loading: boolean
  error?: ApolloError
  state: AUTH_STATE
}

const createValidate = (state: AUTH_STATE) => (
  values: AuthForm,
): Partial<AuthForm> => {
  let errors: Partial<AuthForm> = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  if (state === AUTH_STATE.Signup && !values.name) {
    errors.name = 'Required'
  }

  return errors
}

export const AuthenticateForm: React.FC<Props> = ({
  onSubmit,
  loading,
  error,
  state,
  children,
}) => {
  const validate = createValidate(state)

  return (
    <Formik<AuthForm>
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ touched, isValid, isSubmitting }) => {
        const formTouched = Object.values(touched).some(Boolean)

        return (
          <Form>
            <Fieldset loading={loading}>
              {state === AUTH_STATE.Signup && (
                <Field name={FIELDS.name}>
                  {({ field, form }: FieldProps<AuthForm>) => (
                    <Input<AuthForm>
                      field={field}
                      label="Name"
                      type="Text"
                      error={
                        form.touched.name &&
                        form.errors.name &&
                        form.errors.name
                      }
                    />
                  )}
                </Field>
              )}
              <Field name={FIELDS.email}>
                {({ field, form }: FieldProps<AuthForm>) => (
                  <Input<AuthForm>
                    field={field}
                    label="Email"
                    type="email"
                    error={
                      form.touched.email &&
                      form.errors.email &&
                      form.errors.email
                    }
                  />
                )}
              </Field>
              <Field name={FIELDS.password}>
                {({ field, form }: FieldProps<AuthForm>) => (
                  <Input<AuthForm>
                    field={field}
                    label="Password"
                    type="password"
                    error={
                      form.touched.password &&
                      form.errors.password &&
                      form.errors.password
                    }
                  />
                )}
              </Field>
            </Fieldset>
            {error && <p>{error.message}</p>}
            <div className={styles.buttons}>
              <Button
                type="submit"
                version="secondary"
                disabled={(formTouched && !isValid) || isSubmitting}
              >
                {state}
              </Button>
              {children}
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
