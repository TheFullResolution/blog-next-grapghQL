import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { BlogPost } from '../../../_types/data'

const ALL_ARTICLES_QUERY = gql`
  query ALL_ARTICLES_QUERY {
    blogPosts {
      id
      title
      body
    }
  }
`

interface QueryData {
  blogPosts: BlogPost[]
}

const Home = () => (
    <Query<QueryData> query={ALL_ARTICLES_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        if (!data) return <p>No Data</p>
        return (
          <>
            {data.blogPosts.map(post => (
              <section key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </section>
            ))}
          </>
        )
      }}
    </Query>
)

export { Home }
