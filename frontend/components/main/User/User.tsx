import {
  UserDataComponent,
  UserDataQuery,
  UserDataQueryVariables,
} from '../../../generated/graphql'
import { QueryResult } from 'react-apollo'

interface Props {
  children: (
    payload: QueryResult<UserDataQuery, UserDataQueryVariables>,
  ) => JSX.Element
}

const User: React.FC<Props> = ({ children }) => {
  return <UserDataComponent>{payload => children(payload)}</UserDataComponent>
}

export { User }
