import * as styles from './pagination.scss'
import { Pagination_QueryComponent } from '../../../generated/graphql'
import Link from 'next/link'
import { perPage } from '../../../app/config'
import { routes, RoutPath } from '../../../app/routes'
import { classNames } from '../../../utils/classnames'

interface Props {
  page: number
}

const Pagination: React.FC<Props> = ({ page }) => {
  return (
    <Pagination_QueryComponent>
      {({ data }) => {
        const count = (data && data.blogPostsConnection.aggregate.count) || 0
        const pages = Math.ceil(count / perPage)

        return (
          <div className={styles.container}>
            <Link
              prefetch
              href={{
                pathname: routes[RoutPath.home].path,
                query: { page: page - 1 },
              }}
            >
              <a
                className={classNames([
                  ...(pages === 1 || page === 1 ? [styles.hidden] : []),
                ])}
                aria-disabled={page <= 1}
              >
                ← Prev
              </a>
            </Link>

            <div className={styles.text}>
              <p>
                Page {page} of {pages}!
              </p>
              <p>{count} Items Total</p>
            </div>

            <Link
              prefetch
              href={{
                pathname: routes[RoutPath.home].path,
                query: { page: page + 1 },
              }}
            >
              <a
                className={classNames([
                  ...(pages === 1 || page >= pages ? [styles.hidden] : []),
                ])}
                aria-disabled={page >= pages}
              >
                Next →
              </a>
            </Link>
          </div>
        )
      }}
    </Pagination_QueryComponent>
  )
}

export { Pagination }
