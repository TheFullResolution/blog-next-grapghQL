import * as styles from './errorMessage.scss'

interface Props {
  error: string
}

const ErrorMessage: React.FC<Props> = ({error}) => {
  return <div className={styles.container}>{error}</div>
}

export { ErrorMessage }