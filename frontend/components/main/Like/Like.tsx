import { ApolloError } from 'apollo-boost'
import { useState } from 'react'

import {
  Create_LikeComponent,
  Delete_LikeComponent,
  Likes_For_BlogpostComponent,
  Likes_For_BlogpostDocument,
  Likes_For_BlogpostQuery,
  UserDataQuery,
  UserDataQueryVariables,
} from '../../../generated/graphql'
import { getActiveParam } from '../../../utils/getActiveParam'
import { isLoggedIn, User } from '../User/User'
import { LikeForm } from './LikeForm'
import { createOnClick } from './methods/createOnClick'
import { QueryResult } from 'react-apollo'

interface Props {
  blogPostId: string
}

function findUserLikeId(
  userId: string | null,
  likes: Likes_For_BlogpostQuery['likes'],
) {
  if (!userId) return null
  const like = likes.find(like => like.user.id === userId)
  return like ? like.id : null
}

function getError(error: string | ApolloError) {
  if (typeof error === 'string') {
    return error
  } else {
    return error.message
  }
}

function getLikeValues(
  payload: QueryResult<UserDataQuery, UserDataQueryVariables>,
  data: Likes_For_BlogpostQuery | undefined,
) {
  const userId = isLoggedIn(payload.data) ? payload.data.me.id : null
  const validLikes = data && data.likes
  const likeId = validLikes && findUserLikeId(userId, validLikes)
  const likeState: 'userLiked' | 'default' = likeId ? 'userLiked' : 'default'

  return {
    userId,
    validLikes,
    likeId,
    likeState,
  }
}

function getRefetchQuery(blogPostId: string) {
  return {
    query: Likes_For_BlogpostDocument,
    variables: { id: blogPostId },
  }
}

const Like: React.FC<Props> = ({ blogPostId }) => {
  const [authError, setAuthError] = useState<string | null>(null)
  const onClickAuthError = () => {
    setAuthError('You have to be logged in to like the article')
  }
  const onClickError = () => {
    setAuthError('Sorry, something went wrong')
  }
  return (
    <User>
      {({ payload }) => (
        <Likes_For_BlogpostComponent variables={{ id: blogPostId }}>
          {({ data }) => (
            <Create_LikeComponent
              refetchQueries={[getRefetchQuery(blogPostId)]}
            >
              {(createLike, createLikeParams) => (
                <Delete_LikeComponent
                  refetchQueries={[getRefetchQuery(blogPostId)]}
                >
                  {(deleteLike, deleteLikeParams) => {
                    const {
                      userId,
                      validLikes,
                      likeId,
                      likeState,
                    } = getLikeValues(payload, data)

                    const error = getActiveParam<
                      ApolloError | string | undefined | null
                    >(createLikeParams.error, deleteLikeParams.error, authError)

                    const loading = getActiveParam(
                      createLikeParams.loading,
                      deleteLikeParams.loading,
                    )

                    const onClick = createOnClick({
                      userId,
                      likeId,
                      blogPostId,
                      likeState,
                      createLike,
                      deleteLike,
                      onClickAuthError,
                      onClickError,
                    })
                    return (
                      <LikeForm
                        likeCount={validLikes ? validLikes.length : 0}
                        likeState={likeState}
                        onClick={onClick}
                        error={error ? getError(error) : undefined}
                        loading={loading}
                      />
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
