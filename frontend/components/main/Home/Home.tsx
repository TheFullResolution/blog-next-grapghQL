import { All_Blog_PostsComponent } from '../../../generated/graphql'
import { PostItem } from '../../blocks/PostItem/PostItem'
import { Pagination } from '../Pagination/Pagination'

const Home: React.FC = () => (
  <>
    <Pagination />
    <All_Blog_PostsComponent>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        if (!data || !data.blogPosts.length) return <p>No Data</p>
        return (
          <>
            {data.blogPosts.map(post => (
              <PostItem post={post} key={post.id} />
            ))}
          </>
        )
      }}
    </All_Blog_PostsComponent>
  </>
)

export { Home }
