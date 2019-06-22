import * as styles from './userPage.scss'
import { User, isLoggedIn } from '../User/User'
import { User_Blog_PostsComponent } from '../../../generated/graphql'
import { UsersArticles } from '../../blocks/UsersArticles/UsersArticles'

const UserPage: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Account Page</h1>
      <User>
        {({ payload }) => {
          if (isLoggedIn(payload.data)) {
            return (
              <User_Blog_PostsComponent variables={{ id: payload.data.me.id }}>
                {({ data }) => (
                  <>
                    <h2>List of your articles:</h2>
                    {data && <UsersArticles data={data} />}
                  </>
                )}
              </User_Blog_PostsComponent>
            )
          } else return null
        }}
      </User>
    </section>
  )
}

export { UserPage }
