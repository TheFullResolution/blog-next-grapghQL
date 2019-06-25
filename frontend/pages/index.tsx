import { Home } from '../components/main/Home/Home'
import { PageComponent } from './_app'

const HomePage: PageComponent = ({ query }) => {
  const page = typeof query.page === 'string' ? parseFloat(query.page) : 1
  return <Home page={page} />
}

export default HomePage
