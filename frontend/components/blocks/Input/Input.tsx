import { FieldProps } from 'formik'

import * as styles from './input.scss'

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
      <label htmlFor={field.name}>{label}</label>
      <input id={field.name} type={type} {...field} placeholder={placeholder} />
      {error}
    </div>
  )
}
