import styles from './styles.module.css'

export function Planos() {
  return(
    <>
      <div className={styles.container} id='planos'>
        <h1 className={styles.title}>Planos insanos</h1>
        <div className={styles.wrapper}>
          <div className={styles.planos}>
            <h1 className={styles.planosText}>R$0/mês</h1>
            <h2 className={styles.planosText}>Tier Free</h2>
            <ul>
              <li className={`${styles.listElement} ${styles.have}`}>Acesso ao jogo</li>
              <li className={`${styles.listElement} ${styles.have}`}>Criação de salas</li>
              <li className={`${styles.listElement} ${styles.have}`}>Acessar salas</li>
              <li className={`${styles.listElement} ${styles.dont}`}>Zero propagandas</li>
              <li className={`${styles.listElement} ${styles.dont}`}>Decoração de perfil</li>
            </ul>
          </div>
          <div className={styles.planos}>
          <h1 className={styles.planosText}>R$15/mês</h1>
            <h2 className={styles.planosText}>Tier Pro</h2>
            <ul>
              <li className={`${styles.listElement} ${styles.have}`}>Acesso ao jogo</li>
              <li className={`${styles.listElement} ${styles.have}`}>Criação de salas</li>
              <li className={`${styles.listElement} ${styles.have}`}>Acessar salas</li>
              <li className={`${styles.listElement} ${styles.have}`}>Zero propagandas</li>
              <li className={`${styles.listElement} ${styles.have}`}>Decoração de perfil</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}