import { MutationFn } from 'react-apollo'
import {
  Create_LikeMutation,
  Create_LikeMutationVariables,
  Delete_LikeMutationVariables,
  Delete_LikeMutation,
} from '../../../../generated/graphql'

export interface CreatOnClickParams {
  userId: string | undefined
  likeId?: string
  blogPostId: string
  blogPostAuthorId: string
  createLike: MutationFn<Create_LikeMutation, Create_LikeMutationVariables>
  deleteLike: MutationFn<Delete_LikeMutation, Delete_LikeMutationVariables>
  setAuthError: (value: React.SetStateAction<string | undefined>) => void
}

export function createOnClick({
  blogPostAuthorId,
  blogPostId,
  createLike,
  deleteLike,
  likeId,
  setAuthError,
  userId,
}: CreatOnClickParams) {
  if (!userId) {
    return () => {
      setAuthError('You have to be logged in to like the article')
    }
  }

  if (blogPostAuthorId === userId) {
    return () => {
      setAuthError(
        "I know you like your work, but you can't like your own article",
      )
    }
  }

  if (!likeId) {
    return () => {
      createLike({ variables: { blogPostId } })
    }
  }
  if (likeId) {
    return () => {
      deleteLike({ variables: { likeId } })
    }
  }
  return () => {
    setAuthError('Sorry, something went wrong')
  }
}
