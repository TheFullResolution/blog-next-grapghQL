import { FieldProps } from 'formik'

import * as styles from './input.scss'

interface Props<T> {
  field: FieldProps<T>['field']
  label: string
  error?: string | boolean
}

export function Input<FORM>({ field, label, error }: Props<FORM>) {
  return (
    <div className={styles.container}>
      <label htmlFor={field.name}>{label}</label>
      <input
        id={field.name}
        type="text"
        {...field}
        placeholder="Title of the Post"
      />
      {error}
    </div>
  )
}
