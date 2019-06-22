import * as styles from './like.scss'
import {
  Likes_For_BlogpostComponent,
  Create_LikeComponent,
  Delete_LikeComponent,
} from '../../../generated/graphql'
import { User } from '../User/User'
import { Button } from '../../blocks/Button/Button'
import { useHover } from '../../../utils/useHover'

interface Props {
  blogPostId: string
}

const Like: React.FC<Props> = ({ blogPostId }) => {
  const { ref, value } = useHover<HTMLButtonElement>()
  return (
    <User>
      {({ payload, loggedIn }) => (
        <Likes_For_BlogpostComponent variables={{ id: blogPostId }}>
          {({ data }) => (
            <Create_LikeComponent>
              {(createLike, createLikeParams) => (
                <Delete_LikeComponent>
                  {(deleteLike, deleteLikeParams) => {
                    const count = data && data.likes ? data.likes.length : 0
                    const onClick = () => {
                      createLike({variables: {
                        id: blogPostId
                      }})
                    }
                    return (
                      <Button
                        disabled={!loggedIn}
                        version="like"
                        className={styles.button}
                        ref={ref}
                        onClick={onClick}
                      >
                        {!value ? `Liked by ${count} people` : 'Like this'}
                      </Button>
                    )
                  }}
                </Delete_LikeComponent>
              )}
            </Create_LikeComponent>
          )}
        </Likes_For_BlogpostComponent>
      )}
    </User>
  )
}
export { Like }
