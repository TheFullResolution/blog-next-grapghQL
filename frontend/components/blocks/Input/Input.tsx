import { FieldProps } from 'formik'

import * as styles from './input.scss'
import { classNames } from '../../../utils/classnames'

interface Props<T> {
  field: FieldProps<T>['field']
  label: string
  placeholder?: string
  type?: string
  error?: string | boolean
}

export function Input<FORM>({
  field,
  label,
  error,
  type = 'text',
  placeholder = '',
}: Props<FORM>) {
  return (
    <div className={styles.container}>
      <div className={styles.filedWrapper}>
        <label htmlFor={field.name}>{label}</label>
        {error && <span className={styles.message}>{error}</span>}
      </div>
      <input
        className={classNames([error && styles.error])}
        id={field.name}
        type={type}
        {...field}
        placeholder={placeholder}
      />
    </div>
  )
}
