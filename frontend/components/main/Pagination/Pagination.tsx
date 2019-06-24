import * as styles from './pagination.scss'
import { Pagination_QueryComponent } from '../../../generated/graphql'

interface Props {}

const Pagination: React.FC<Props> = () => {
  return (
    <Pagination_QueryComponent>
      {({ data }) => {
        const count = data && data.blogPostsConnection.aggregate.count
        return <div className={styles.container}>Pagination {count} works!</div>
      }}
    </Pagination_QueryComponent>
  )
}

export { Pagination }
