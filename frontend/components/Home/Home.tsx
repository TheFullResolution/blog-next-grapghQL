import styles from './home.scss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const ALL_ARTICLES_QUERY = gql`
  query ALL_ARTICLES_QUERY {
    blogPosts {
      id
      title
      body
    }
  }
`;

const Home = () => (
  <div className={styles.container}>
    <Query query={ALL_ARTICLES_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return data.blogPosts.map((post: { [key: string]: string }) => (
          <section key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </section>
        ));
      }}
    </Query>
  </div>
);

export { Home };
