---
to: frontend/components/<%= folder %>/<%= camelizeName %>/<%= camelizeName %>.tsx
---
import * as styles from './<%= camelizeLowerName %>.scss'

interface Props {

}

const <%= camelizeName %>: React.FC<Props> = () => {
  return <div className={styles.container}><%= camelizeName %> works!</div>
}

export { <%= camelizeName %> }