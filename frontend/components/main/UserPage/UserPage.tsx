import * as styles from './userPage.scss'
import { User, isLoggedIn } from '../User/User'
import {
  User_Blog_PostsComponent,
  User_LikesComponent,
} from '../../../generated/graphql'
import { UserLists } from '../../blocks/UserLists/UserLists'
import { NeedAuth } from '../../blocks/NeedAuth/NeedAuth'

const UserPage: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Account Page</h1>
      <User>
        {({ payload }) => {
          if (isLoggedIn(payload.data)) {
            return (
              <div className={styles.wrapper}>
                <User_Blog_PostsComponent
                  variables={{ id: payload.data.me.id }}
                >
                  {({ data }) => (
                    <div>
                      <h2>List of your articles:</h2>
                      {data && <UserLists data={data} />}
                    </div>
                  )}
                </User_Blog_PostsComponent>
                <User_LikesComponent variables={{ id: payload.data.me.id }}>
                  {({ data }) => (
                    <div>
                      <h2>List of your likes:</h2>
                      {data && <UserLists data={data} />}
                    </div>
                  )}
                </User_LikesComponent>
              </div>
            )
          } else {
            return <NeedAuth />
          }
        }}
      </User>
    </section>
  )
}

export { UserPage }
