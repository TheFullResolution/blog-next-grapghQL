import Link from 'next/link'
import { FaBookReader, FaWalking } from 'react-icons/fa'

import { routes, RoutPath } from '../../../app/routes'
import { LogoutComponent, UserDataDocument } from '../../../generated/graphql'
import { Button } from '../../blocks/Button/Button'
import { isLoggedIn, User } from '../User/User'

import styles from './header.scss'

const routPathsArray = [RoutPath.home, RoutPath.create, RoutPath.auth, RoutPath.account]

const Header: React.FC = () => (
  <User>
    {({ payload, loggedIn }) => {
      const { data } = payload
      return (
        <LogoutComponent refetchQueries={[{ query: UserDataDocument }]}>
          {logout => (
            <header className={styles.header}>
              <Link href={routes[RoutPath.home].path}>
                <a>
                  <h1>
                    <FaBookReader /><span>Blog Platform with GraphQL</span>
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
                              {route.name}
                            </a>
                          </Link>
                        </li>
                      )
                    })}
                  {loggedIn && (
                    <Button className={styles.navLink} onClick={logout}>
                      <FaWalking />
                      Logout
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
