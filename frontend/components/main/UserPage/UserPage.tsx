import * as styles from './userPage.scss'
import { User, isLoggedIn } from '../User/User'
import { User_Blog_PostComponent } from '../../../generated/graphql'

interface Props {}

const UserPage: React.FC<Props> = () => {
  return (
    <User>
      {({ payload }) => {
        if (isLoggedIn(payload.data)) {
          return (
            <User_Blog_PostComponent variables={{ id: payload.data.me.id }}>
              {({ data }) => (
                <ul>
                  {data &&
                    data.blogPosts.map(post => (
                      <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
              )}
            </User_Blog_PostComponent>
          )
        } else return null
      }}
    </User>
  )
}

export { UserPage }
