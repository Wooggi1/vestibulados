import styles from './styles.module.css'
import '@fontsource/poppins'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>Vestibulandos</h2>
      
        <nav className={styles.menuNav}>
          <a>Home</a>
          <a>Sobre nós</a>
          <a>Planos</a>
          <a>Login</a>
          <button><a>Sign in</a></button>
        </nav>
      </div>
    </header>
  )
}