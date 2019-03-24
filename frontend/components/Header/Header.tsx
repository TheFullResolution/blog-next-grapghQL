import styles from './header.scss';

import Link from 'next/link';
import { routes, RoutPath } from '../../lib/routes';

const routPathsArray = [RoutPath.create];

const Header: React.FC = () => (
  <header className={styles.header}>
    <Link href="/">
      <a>
        <h1>The FullResolution</h1>
      </a>
    </Link>

    <nav>
      {routPathsArray.map((val) => {
        const route = routes[val];
        return (
          <li key={route.path}>
            <Link href={route.path}>
              <a>{route.path}</a>
            </Link>
          </li>
        );
      })}
    </nav>
  </header>
);

export { Header };
