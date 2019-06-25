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
  blogPostAuthorId: string
}

function findUserLikeId(
  userId: string | undefined,
  likes: Likes_For_BlogpostQuery['likes'],
) {
  if (!userId) return undefined
  const like = likes.find(like => like.user.id === userId)
  return like ? like.id : undefined
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
  const userId = isLoggedIn(payload.data) ? payload.data.me.id : undefined
  const validLikes = data && data.likes
  const likeId = validLikes && findUserLikeId(userId, validLikes)

  return {
    userId,
    validLikes,
    likeId,
  }
}

function getRefetchQuery(blogPostId: string) {
  return {
    query: Likes_For_BlogpostDocument,
    variables: { id: blogPostId },
  }
}

const Like: React.FC<Props> = ({ blogPostId, blogPostAuthorId }) => {
  const [authError, setAuthError] = useState<string | undefined>(undefined)

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
                    const { userId, validLikes, likeId } = getLikeValues(
                      payload,
                      data,
                    )

                    const error = getActiveParam<
                      ApolloError | string | undefined
                    >(createLikeParams.error, deleteLikeParams.error, authError)

                    const loading = getActiveParam(
                      createLikeParams.loading,
                      deleteLikeParams.loading,
                    )

                    const onClick = createOnClick({
                      blogPostAuthorId,
                      blogPostId,
                      createLike,
                      deleteLike,
                      likeId,
                      setAuthError,
                      userId,
                    })
                    return (
                      <LikeForm
                        likeCount={validLikes ? validLikes.length : 0}
                        likeId={likeId}
                        onClick={onClick}
                        error={error && getError(error)}
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
