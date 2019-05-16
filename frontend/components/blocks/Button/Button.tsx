import * as styles from './button.scss'
import { classNames } from '../../../utils/classnames'

interface Props {
  type?: React.ButtonHTMLAttributes<{}>['type']
  version?: 'primary' | 'secondary'
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  type = 'button',
  onClick = () => {},
  disabled,
  children,
  version,
}) => {
  const versionClass = version && styles[version]

  return (
    <button
      className={classNames([styles.button, versionClass])}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export { Button }
