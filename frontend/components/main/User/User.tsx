import {
  UserDataComponent,
  UserDataQuery,
  UserDataQueryVariables,
} from '../../../generated/graphql'
import { QueryResult } from 'react-apollo'

interface ChildrenParams {
  payload: QueryResult<UserDataQuery, UserDataQueryVariables>
  loggedIn: boolean
}

interface Props {
  children: ({ payload }: ChildrenParams) => JSX.Element
}

function isLoggedIn(data: UserDataQuery | undefined): data is UserDataQuery {
  return !!(data !== undefined && data.me && data.me.id)
}

const User: React.FC<Props> = ({ children }) => {
  return (
    <UserDataComponent>
      {payload => {
        const loggedIn = isLoggedIn(payload.data)
        return children({ payload, loggedIn })
      }}
    </UserDataComponent>
  )
}

export { User, isLoggedIn }
