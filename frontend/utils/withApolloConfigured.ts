import ApolloClient from 'apollo-boost'
import withApollo from 'next-with-apollo'

import { endpoint, prodEndpoint } from '../app/config'

export const withApolloConfigured = withApollo(
  ({ headers }) =>
    new ApolloClient({
      uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
      request: async operation => {
        await operation.setContext({
          fetchOptions: {
            credentials: 'include',
          },
          headers,
        })
      },
    }),
)
