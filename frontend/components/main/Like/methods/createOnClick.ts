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
  createLike: MutationFn<Create_LikeMutation, Create_LikeMutationVariables>
  deleteLike: MutationFn<Delete_LikeMutation, Delete_LikeMutationVariables>
  onClickAuthError: () => void
  onClickError: () => void
}

export function createOnClick({
  userId,
  likeId,
  blogPostId,
  createLike,
  deleteLike,
  onClickAuthError,
  onClickError,
}: CreatOnClickParams) {
  if (!userId) {
    return () => {
      onClickAuthError()
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
    onClickError()
  }
}
