import styles from './styles.module.css'

export function Sobre() {
  return (
    <>
      <div id='sobre' className={styles.container}>
        <h1>Sobre nós</h1>
        <p>Nós somos um grupo de universitários apaixonados por jogos e competições.
          A ideia do Vestibulados nasceu da nossa vontade de transformar o estudo em 
          uma experiência divertida e envolvente, com um toque competitivo. Com rankings, 
          pontuações e desafios entre amigos, queremos que o aprendizado seja uma jornada 
          colaborativa e emocionante. Nosso objetivo é oferecer uma forma de estudo que una 
          diversão e progresso, onde você possa competir, aprender e evoluir junto com seus 
          amigos. Desejamos a todos uma excelente experiência no Vestibulados – 
          bons jogos e ótimos estudos!</p>
      </div>
    </>
  )
}