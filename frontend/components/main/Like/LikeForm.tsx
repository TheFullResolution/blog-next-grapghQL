import React from 'react'
import { Button } from '../../blocks/Button/Button'
import styles from './like.scss'
import {
  FaThumbsDown,
  FaThumbsUp,
  FaRegCheckCircle,
  FaCircleNotch,
} from 'react-icons/fa'
import { ErrorMessage } from '../../blocks/Error/ErrorMessage'

interface Props {
  onClick: () => void
  likeCount: number
  likeId: string | undefined
  loading?: boolean
  error?: string
}

function getPeoplePlural(likeCount: Props['likeCount']) {
  if (likeCount === 1) {
    return `1 person`
  } else if (likeCount > 1) {
    return `${likeCount} people`
  } else {
    return ''
  }
}

function getLabel(likeId: Props['likeId'], likeCount: Props['likeCount']) {
  if (likeId) {
    const countMinusUser = likeCount - 1
    return `You ${countMinusUser > 0 ? 'and' : ''} ${getPeoplePlural(
      countMinusUser,
    )} liked it`
  }

  return `${likeCount === 0 ? '0' : getPeoplePlural(likeCount)} liked it`
}

function getButtonLabel(likeId: Props['likeId']) {
  if (likeId) {
    return (
      <>
        <FaThumbsDown /> Unlike this
      </>
    )
  }
  return (
    <>
      <FaThumbsUp /> Like this
    </>
  )
}

const LikeForm: React.FC<Props> = ({
  onClick,
  likeCount,
  likeId,
  error,
  loading,
}) => {
  return (
    <>
      <div className={styles.container}>
        <p>
          <FaRegCheckCircle /> {getLabel(likeId, likeCount)}
        </p>
        <Button
          version="like"
          className={styles.button}
          onClick={onClick}
          disabled={loading}
        >
          {!loading ? (
            getButtonLabel(likeId)
          ) : (
            <FaCircleNotch className={styles.loader} />
          )}
        </Button>
      </div>
      {error && <ErrorMessage className={styles.error}>{error}</ErrorMessage>}
    </>
  )
}

LikeForm.displayName = 'LikeButton'

export { LikeForm }
