import styles from './styles.module.css'

interface ModalProps {
  closeModal: () => void
}

function Modal({ closeModal }: ModalProps){
  return (
    <div id="modal" className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>&times;</span>
        <h2>Informações adicionais</h2>
        <p>O vestibulados é um projeto feito por 4 alunos da UCB que tem 
          como objetivo ajudar os estudantes de vestibular e concurso
          a estudar de forma divertida e descontraída.
          O jogo começa com um usuário host criando uma sala e gerando um código de convite,
          os amigos do usuário entram utilizando o código e o host fará as configurações da sala,
          por exemplo: disciplinas, modo de jogo, tempo limite e etc. Ao fim da partida o usuário
          que acertar o maior numero de questões e/ou respondeu mais rápido, receberá mais pontos
          e será coroado o grande campeão.
        </p>
      </div>
    </div>
  )
}

export default Modal;