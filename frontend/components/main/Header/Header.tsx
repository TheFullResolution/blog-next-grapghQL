import Link from 'next/link'
import { FaBookReader, FaWalking } from 'react-icons/fa'

import { routes, RoutPath } from '../../../routes'
import styles from './header.scss'
import { User } from '../User/User'
import {
  LogoutComponent,
  UserDataDocument,
  UserDataQuery,
} from '../../../generated/graphql'
import { Button } from '../../blocks/Button/Button'

const routPathsArray = [RoutPath.create, RoutPath.auth]

function isLoggedIn(data: UserDataQuery | undefined): data is UserDataQuery {
  return !!(data !== undefined && data.me && data.me.id)
}

const Header: React.FC = () => (
  <User>
    {({ data }) => {
      return (
        <LogoutComponent refetchQueries={[{ query: UserDataDocument }]}>
          {logout => (
            <header className={styles.header}>
              <Link href={routes[RoutPath.home].path}>
                <a>
                  <h1>
                    <FaBookReader /> Blog Platform with GraphQL
                  </h1>
                </a>
              </Link>
              {isLoggedIn(data) && <p>Hi, {data.me.name}</p>}

              <div className={styles.wrapper}>
                <nav>
                  {routPathsArray
                    .map(val => routes[val])
                    .filter(route => {
                      if (route.auth === 'always') return true
                      if (isLoggedIn(data)) return route.auth
                      return !route.auth
                    })
                    .map(route => {
                      return (
                        <li key={route.path}>
                          <Link href={route.path}>
                            <a className={styles.navLink}>
                              {route.icon}
                              {route.path}
                            </a>
                          </Link>
                        </li>
                      )
                    })}
                  {isLoggedIn(data) && (
                    <Button className={styles.navLink} onClick={logout}>
                      <FaWalking />
                      logout
                    </Button>
                  )}
                </nav>
              </div>
            </header>
          )}
        </LogoutComponent>
      )
    }}
  </User>
)

export { Header }
