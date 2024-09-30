import styles from './styles.module.css'

export function Planos() {
  return(
    <>
      <div className={styles.container}>
        <h1>Planos insanos</h1>
      </div>
      <div className={styles.imgContainer}>
        <img src='/images/img-planos.png'></img>
      </div>
    </>
  )
}