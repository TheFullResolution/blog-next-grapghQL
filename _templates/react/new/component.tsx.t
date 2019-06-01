---
to: frontend/components/<%= folder %>/<%= Name %>/<%= Name %>.tsx
---
import * as styles from './<%= name %>.scss'

interface Props {

}

const <%= Name %>: React.FC<Props> = () => {
  return <div className={styles.container}><%= Name %> works!</div>
}

export { <%= Name %> }