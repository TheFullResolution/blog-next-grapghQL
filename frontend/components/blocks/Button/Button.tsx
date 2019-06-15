import * as styles from './button.scss'
import { classNames } from '../../../utils/classnames'
import { forwardRef } from 'react'

interface CommonProps {
  className?: string
  version?: 'primary' | 'secondary'
  onClick?: () => void
  children: React.ReactNode;
}

interface LinkProps extends CommonProps {
  type?: 'link'
}

interface ButtonProps extends CommonProps {
  type?: React.ButtonHTMLAttributes<{}>['type']
  disabled?: boolean
}

type Props = ButtonProps | LinkProps

function isPropsForLinkElement(
  props: ButtonProps | LinkProps,
): props is LinkProps {
  return !!(props.type && props.type === 'link')
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const { onClick = () => {}, children, version, className } = props
    const versionClass = version && styles[version]

    if (isPropsForLinkElement(props)) {
      return (
        <a
          className={classNames([styles.button, versionClass, className])}
          onClick={onClick}
        >
          {children}
        </a>
      )
    }

    const { type = 'button', disabled } = props

    return (
      <button
        className={classNames([styles.button, versionClass, className])}
        type={type}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)

export { Button }
