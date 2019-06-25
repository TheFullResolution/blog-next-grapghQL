import { All_Blog_PostsComponent } from '../../../generated/graphql'
import { PostItem } from '../../blocks/PostItem/PostItem'
import { Pagination } from '../Pagination/Pagination'
import { perPage } from '../../../app/config'

interface Props {
  page: number
}

const Home: React.FC<Props> = ({ page }) => (
  <>
    <Pagination page={page} />
    <All_Blog_PostsComponent
      variables={{ skip: page * perPage - perPage, first: perPage }}
    >
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
    <Pagination page={page} />
  </>
)

export { Home }
