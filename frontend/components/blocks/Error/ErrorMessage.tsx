import * as styles from './errorMessage.scss'
import { classNames } from '../../../utils/classnames'

interface Props {
  className?: string
}

const ErrorMessage: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={classNames([styles.container, className])}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}

export { ErrorMessage }
