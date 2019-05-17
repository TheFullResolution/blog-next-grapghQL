import {
  SignupComponent,
  LoginComponent,
  UserDataDocument,
} from '../../../generated/graphql'
import { AuthenticateForm } from './AuthenticateForm'
import { useState } from 'react'
import { Button } from '../../blocks/Button/Button'

import * as styles from './authenticate.scss'
import { AUTH_STATE } from './auth.types'

interface AuthForm {
  email: string
  name?: string
  password: string
}

function getActiveParam<T>(...params: T[]): T | undefined {
  const active = params.filter(el => !!el)

  if (!active.length) return undefined
  return active[0]
}

export const Authenticate = () => {
  const [state, setstate] = useState<AUTH_STATE>(AUTH_STATE.Login)

  const handleClick = (val: AUTH_STATE) => () => {
    setstate(val)
  }

  return (
    <SignupComponent refetchQueries={[{ query: UserDataDocument }]}>
      {(signUp, signUpParams) => (
        <LoginComponent refetchQueries={[{ query: UserDataDocument }]}>
          {(logIn, signInParams) => {
            const error = getActiveParam(signInParams.error, signUpParams.error)
            const loading = getActiveParam(
              signInParams.loading,
              signUpParams.loading,
            )

            const onSubmit = async (values: AuthForm) => {
              if (state === AUTH_STATE.Login)
                await logIn({
                  variables: {
                    email: values.email,
                    password: values.password,
                  },
                })
              if (state === AUTH_STATE.Signup && values.name) {
                await signUp({
                  variables: {
                    email: values.email,
                    password: values.password,
                    name: values.name,
                  },
                })
              }
            }

            return (
              <div className={styles.container}>
                <h2>{state}</h2>

                <AuthenticateForm
                  error={error}
                  state={state}
                  loading={!!loading}
                  onSubmit={onSubmit}
                >
                  {Object.values(AUTH_STATE)
                    .filter(val => val !== state)
                    .map(name => (
                      <Button
                        key={name}
                        version="primary"
                        onClick={handleClick(name)}
                      >
                        {name} instead
                      </Button>
                    ))}
                </AuthenticateForm>
              </div>
            )
          }}
        </LoginComponent>
      )}
    </SignupComponent>
  )
}
