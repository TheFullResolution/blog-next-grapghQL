import { MutationFn } from 'react-apollo'
import {
  Create_LikeMutation,
  Create_LikeMutationVariables,
  Delete_LikeMutationVariables,
  Delete_LikeMutation,
} from '../../../../generated/graphql'

export interface CreatOnClickParams {
  userId: string | null
  likeId?: string | null
  blogPostId: string
  likeState: 'userLiked' | 'default'
  createLike: MutationFn<Create_LikeMutation, Create_LikeMutationVariables>
  deleteLike: MutationFn<Delete_LikeMutation, Delete_LikeMutationVariables>
  onClickAuthError: () => void
  onClickError: () => void
}

export function createOnClick({
  userId,
  likeId,
  blogPostId,
  likeState,
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
  if (likeState === 'default') {
    return () => {
      createLike({ variables: { blogPostId } })
    }
  }
  if (likeState === 'userLiked' && likeId) {
    return () => {
      console.log({ likeId })
      deleteLike({ variables: { likeId } })
    }
  }
  return () => {
    onClickError()
  }
}
