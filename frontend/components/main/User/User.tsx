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

function isLoggedIn(data: UserDataQuery | undefined): data is UserDataQuery {
  return !!(data !== undefined && data.me && data.me.id)
}


const User: React.FC<Props> = ({ children }) => {
  return <UserDataComponent>{payload => children(payload)}</UserDataComponent>
}

export { User, isLoggedIn }
