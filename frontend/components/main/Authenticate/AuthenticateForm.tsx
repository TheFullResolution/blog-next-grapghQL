import { Formik, Form, FieldProps, Field } from 'formik'
import { Fieldset } from '../../blocks/Fieldset/Fieldset'
import { Input } from '../../blocks/Input/Input'
import { strEnumHelper } from '../../../utils/strEnumHelper'
import { ApolloError } from 'apollo-boost'

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
  showName: boolean
}

export const AuthenticateForm: React.FC<Props> = ({
  onSubmit,
  loading,
  error,
  showName,
}) => (
  <Formik<AuthForm>
    initialValues={{ email: '', password: '' }}
    onSubmit={onSubmit}
  >
    {() => (
      <Form>
        <Fieldset loading={loading}>
          {showName && (
            <Field name={FIELDS.name}>
              {({ field, form }: FieldProps<AuthForm>) => (
                <Input<AuthForm>
                  field={field}
                  label="Name"
                  type="Text"
                  error={
                    form.touched.name && form.errors.name && form.errors.name
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
                  form.touched.email && form.errors.email && form.errors.email
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
        <button type="submit">SUBMIT</button>
      </Form>
    )}
  </Formik>
)
