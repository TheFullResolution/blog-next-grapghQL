import { SigninComponent } from '../../../generated/graphql'

interface SignInForm {
  email: string
  password: string
}

export const Authenticate = () => {
  return (
    <SigninComponent>
      {signIn => {
        return <div>Authenticate</div>
      }}
    </SigninComponent>
  )
}
