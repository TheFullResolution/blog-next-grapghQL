import * as styles from './fieldset.scss'

interface Props {
  loading: boolean
}

export const Fieldset: React.FC<Props> = ({ loading, children }) => (
  <fieldset className={styles.container} disabled={loading}>
    {children}
  </fieldset>
)
