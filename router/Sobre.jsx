import styles from '../router/Sobre.module.css'


export default function Sobre(){
 
  
    return (
      <div className={styles.Sobre_conteiner}>
        <main className={styles.Sobre_main}>
          <h1>Sobre</h1>
          
          <p>Pretendo empelhar-me no cargo que a mim for colocado com dedicação, responsabilidade e profissionalismo, visando sempre o crescimento da empresa e o meu aperfeiçoamento profissional. </p>       

        </main>

        <article className={styles.Sobre_article}>
          <h2>02</h2>   
          <button className={styles.btn_curriculo}>
              <a href="#">Currículo</a>        
           </button>       
        </article>
      </div>
    )
  }


