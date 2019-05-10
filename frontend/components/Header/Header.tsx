import styles from './header.scss'

import Link from 'next/link'
import { routes, RoutPath } from '../../utils/routes'
import { FaBookReader } from 'react-icons/fa'
const routPathsArray = [RoutPath.create, RoutPath.auth]

const Header: React.FC = () => (
  <header className={styles.header}>
    <Link href={routes[RoutPath.home].path}>
      <a>
        <h1>
          <FaBookReader /> Blog Platform with GraphQL
        </h1>
      </a>
    </Link>

    <div className={styles.wrapper}>
      <nav>
        {routPathsArray.map(val => {
          const route = routes[val]
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
      </nav>
    </div>
  </header>
)

export { Header }
