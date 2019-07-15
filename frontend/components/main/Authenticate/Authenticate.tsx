import {
  SignupComponent,
  LoginComponent,
  UserDataDocument,
} from '../../../generated/graphql'
import { AuthenticateForm } from './AuthenticateForm'
import { useState } from 'react'
import { Button } from '../../blocks/Button/Button'
import { withRouter } from 'next/router'

import * as styles from './authenticate.scss'
import { AUTH_STATE } from './auth.types'
import { RoutPath, routes } from '../../../app/routes'
import { getActiveParam } from '../../../utils/getActiveParam'

interface AuthForm {
  email: string
  name?: string
  password: string
}

export const Authenticate = withRouter(function AuthenticateComponent(props) {
  const [state, setstate] = useState<AUTH_STATE>(AUTH_STATE.Login)
  const { router } = props
  const handleClick = (val: AUTH_STATE) => () => {
    setstate(val)
  }

  const redirectAfterAuth = () => {
    if (router) {
      const query = router.query

      if (query && query.redirect && typeof query.redirect === 'string') {
        router.push(query.redirect)
      } else {
        router.push(routes[RoutPath.home].path)
      }
    }
  }

  return (
    <SignupComponent
      refetchQueries={[{ query: UserDataDocument }]}
      awaitRefetchQueries={true}
      onCompleted={data => {
        if (data.signup.id) {
          redirectAfterAuth()
        }
      }}
    >
      {(signUp, signUpParams) => (
        <LoginComponent
          refetchQueries={[{ query: UserDataDocument }]}
          awaitRefetchQueries={true}
          onCompleted={data => {
            if (data.login.id) {
              redirectAfterAuth()
            }
          }}
        >
          {(logIn, signInParams) => {
            const error = getActiveParam(signInParams.error, signUpParams.error)
            const loading = getActiveParam(
              signInParams.loading,
              signUpParams.loading,
            )
            const onSubmit = async (values: AuthForm) => {
              try {
                if (state === AUTH_STATE.Login) {
                  await logIn({
                    variables: {
                      email: values.email,
                      password: values.password,
                    },
                  })
                } else if (state === AUTH_STATE.Signup && values.name) {
                  await signUp({
                    variables: {
                      email: values.email,
                      password: values.password,
                      name: values.name,
                    },
                  })
                }
              } catch (errorc) {
                console.log({ errorc })
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
})
