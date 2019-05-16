import * as styles from './button.scss'

interface Props {

}

const Button: React.FC<Props> = () => {
  return <div className={styles.container}>Button works!</div>
}

export { Button }