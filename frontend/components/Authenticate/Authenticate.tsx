import gql from 'graphql-tag'

interface SignInForm {
  title: string
  body: string
}

interface MutationData {
  signin: any
}

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
    }
  }
`

export const Authenticate = () => {
  return <div>Authenticate</div>
}
