import { All_ArticlesComponent } from "../../../generated/graphql";

const Home = () => (
    <All_ArticlesComponent>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        if (!data || !data.blogPosts.length) return <p>No Data</p>
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
    </All_ArticlesComponent>
)

export { Home }
