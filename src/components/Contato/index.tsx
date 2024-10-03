import styles from './styles.module.css'

export function Contato() {

  return (
    <div  className={styles.container}>
      <div className={styles.inputField}>
        <h1 className={styles.title}>Contate-nos</h1>
        <input id='nome' placeholder='Nome'></input>
        <input id='email' placeholder='Email'></input>
        <textarea id='mensagem' placeholder='Mensagem'></textarea>
        <button id='ContatoBtn' className='button'>Enviar</button>
      </div>
      <div className={styles.imgContainer}>
        <img src='/images/img-contato.jpg' className={styles.img}></img>
      </div>
    </div>
  )
}