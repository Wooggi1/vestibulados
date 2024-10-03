import styles from './styles.module.css'

export function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <a className={`${styles.footerText} ${styles.footerLink}`} href='mailto:thiago2b9s@gmail.com'>email</a>
        <h2 className={styles.footerText}>@copyright</h2>
        <h2 className={styles.footerText}>Vestibulados</h2>
      </footer>
    </div>
  )
}