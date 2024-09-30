import styles from './styles.module.css'

export function Sobre() {
  return (
    <>
      <div id='sobre' className={styles.container}>
        <h1>Sobre nós</h1>
        <p>Somos um grupo de estudantes universitários que adoram jogar e competir.
          A ideia do vestibulados surgiu da vontade de transformar o estudo
          em algo divertido e ao mesmo tempo competitivo, com rankings e pontuações.
          Competir com amigos e evoluir juntos é o objetivo final do jogo e nós
          buscamos conseguir prover essa experiência para todos que jogarem
          vestibulados, bom jogo e bons estudos a todos!</p>
      </div>
      <div className={styles.imgContainer}>
        <img src='images/img-sobre.jpg'></img>
      </div>
    </>
  )
}