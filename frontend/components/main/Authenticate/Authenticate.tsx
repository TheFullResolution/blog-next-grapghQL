import { SigninComponent, SignupComponent } from '../../../generated/graphql'
import { AuthenticateForm } from './AuthenticateForm'
import { useState } from 'react'
import { strEnumHelper } from '../../../utils/strEnumHelper'

interface AuthForm {
  email: string
  name?: string
  password: string
}

const STATE = strEnumHelper(['Login', 'Signup'])
type STATE = keyof typeof STATE

function getActiveParam<T>(...params: T[]): T | undefined {
  const active = params.filter(el => !!el)

  if (!active.length) return undefined
  return active[0]
}

export const Authenticate = () => {
  const [state, setstate] = useState<STATE>(STATE.Login)

  const handleClick = (val: STATE) => () => {
    setstate(val)
  }

  return (
    <SignupComponent>
      {(signUp, signUpParams) => (
        <SigninComponent>
          {(signIn, signInParams) => {
            const error = getActiveParam(signInParams.error, signUpParams.error)
            const loading = getActiveParam(
              signInParams.loading,
              signUpParams.loading,
            )

            const onSubmit = async (values: AuthForm) => {
              if (state === STATE.Login)
                await signIn({
                  variables: {
                    email: values.email,
                    password: values.password,
                  },
                })
              if (state === STATE.Signup && values.name) {
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
              <>
                <h2>{state}</h2>

                {Object.values(STATE)
                  .filter(val => val !== state)
                  .map(name => (
                    <button key={name} onClick={handleClick(name)}>
                      Go to {name} instead
                    </button>
                  ))}

                <AuthenticateForm
                  showName={state === STATE.Signup}
                  error={error}
                  loading={!!loading}
                  onSubmit={onSubmit}
                />
              </>
            )
          }}
        </SigninComponent>
      )}
    </SignupComponent>
  )
}
