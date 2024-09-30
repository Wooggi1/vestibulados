import styles from './styles.module.css'
import '@fontsource/poppins'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>Vestibulandos</h2>
      
        <nav className={styles.menuNav}>
          <a href='#home'>Home</a>
          <a href='#sobre'>Sobre</a>
          <a href='#planos'>Planos</a>
          <button><a>Login</a></button>
          <button><a>Cadastro</a></button>
        </nav>
      </div>
    </header>
  )
}