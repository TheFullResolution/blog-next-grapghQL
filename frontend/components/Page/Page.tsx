import { Header } from '../Header/Header'
import * as styles from './page.scss'

const Page: React.FC = ({ children }) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
  </>
)

export { Page }
