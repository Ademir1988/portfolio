import styles from '../router/Sobre.module.css'
import CurriculumButton from './CurriculumButton'

export default function Sobre(){
 
  
    return (
      <div className={styles.Sobre_conteiner}>
        <main className={styles.Sobre_main}>
          <h1>Sobre</h1>
          
          <p>olá me chamo Ademir tenho 34 anos , entusiasta de tecnologia e conhecimento em geral! Estou gostando dá area de front-end, por trabalhar a parte artística e lógica por trás das coisas,
          e espero cooperar com sua equipe no que me for possivel !  
         
          </p>       

        </main>

        <CurriculumButton />
      </div>
    )
  }


