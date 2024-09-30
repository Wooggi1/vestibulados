import styles from './styles.module.css'

export function Divider() {
  return (
    <div className={styles.container}>
      <hr className={styles.divider}></hr>
    </div>
  )
}