import styles from './styles.module.css'
import '@fontsource/poppins'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>Vestibulados</h2>
      
        <nav className={styles.menuNav}>
          <a href='#home' className={styles.navBtn}>Home</a>
          <a href='#sobre' className={styles.navBtn}>Sobre</a>
          <a href='#planos' className={styles.navBtn}>Planos</a>
          <button><a>Login</a></button>
          <button><a>Cadastro</a></button>
        </nav>
      </div>
    </header>
  )
}