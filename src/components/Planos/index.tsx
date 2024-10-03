import styles from './styles.module.css';

export function Planos() {
  return (
    <>
      <div className={styles.container} id='planos'>
        <h1 className={styles.demoTitle}>
          Planos
        </h1>

        <div className={styles.pricingTable}>
          <div className={styles.ptableItem}>
            <div className={styles.ptableSingle}>
              <div className={styles.ptableHeader}>
                <div className={styles.ptableTitle}>
                  <h2>Free</h2>
                </div>
                <div className={styles.ptablePrice}>
                  <h2>
                    <small>R$</small>0<span>/mês</span>
                  </h2>
                </div>
              </div>
              <div className={styles.ptableBody}>
                <div className={styles.ptableDescription}>
                  <ul>
                    <li className={styles.have}>Acesso ao jogo</li>
                    <li className={styles.have}>Criação de salas</li>
                    <li className={styles.have}>Acessar salas</li>
                    <li className={styles.dont}>Zero propagandas</li>
                    <li className={styles.dont}>Decoração de perfil</li>
                  </ul>
                </div>
              </div>
              <div className={styles.ptableFooter}>
                <div className={styles.ptableAction}>
                  <a href="">Assinar</a>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.ptableItem} ${styles.featuredItem}`}>
            <div className={styles.ptableSingle}>
              <div className={styles.ptableHeader}>
                <div className={styles.ptableStatus}>
                  <span>Hot</span>
                </div>
                <div className={styles.ptableTitle}>
                  <h2>Pro</h2>
                </div>
                <div className={styles.ptablePrice}>
                  <h2>
                    <small>R$</small>15<span>/mês</span>
                  </h2>
                </div>
              </div>
              <div className={styles.ptableBody}>
                <div className={styles.ptableDescription}>
                  <ul>
                    <li className={styles.have}>Acesso ao jogo</li>
                    <li className={styles.have}>Criação de salas</li>
                    <li className={styles.have}>Acessar salas</li>
                    <li className={styles.have}>Zero propagandas</li>
                    <li className={styles.have}>Decoração de perfil</li>
                  </ul>
                </div>
              </div>
              <div className={styles.ptableFooter}>
                <div className={styles.ptableAction}>
                  <a href="">Assinar</a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
