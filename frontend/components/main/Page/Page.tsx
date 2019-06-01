import * as styles from './page.scss'
import { Header } from '../Header/Header'

const Page: React.FC = ({ children }) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
  </>
)

export { Page }
