import * as styles from './needAuth.scss'
import Link from 'next/link'
import { routes, RoutPath } from '../../../app/routes'
import { withRouter } from 'next/router'
import { getRedirect } from '../../../utils/getRedirect'
import { Button } from '../Button/Button'
import { FaRegWindowClose } from 'react-icons/fa';

const NeedAuth = withRouter(function NeedAuthComponent({ router }) {
  const redirect = router && getRedirect(router)

  return (
    <div className={styles.container}>
      <p>
        <FaRegWindowClose />
        {' '}To view this page, you have to be logged in.{' '}
        <FaRegWindowClose />
      </p>
      <Link
        href={{
          pathname: routes[RoutPath.auth].path,
          ...(redirect ? { query: { redirect } } : {}),
        }}
      >
        <Button type="link" version="secondary" className={styles.navLink}>
          {routes[RoutPath.auth].icon}
          {routes[RoutPath.auth].name}
        </Button>
      </Link>
    </div>
  )
})

export { NeedAuth }
