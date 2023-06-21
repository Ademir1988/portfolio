import React from 'react'
import styles from '../router/Projetos.module.css'
import Proj from '../src/Projetos.json'
import { FiExternalLink }from 'react-icons/Fi'

const Projetos = () => {
  return (
   
    <div className={styles.Projetos_conteiner}>
        <main className={styles.Projetos_main}>
         
          
        {Proj.map((item)=>{
          const {image, tecnologia, link} =item
          return(
            <>
            <div className={styles.projetos_item}>
              <div className={styles.projetos_image}>
                  <img src={image}/>
              </div>
              <div className={styles.projetos_info}>

                <p className={styles.projetos_tecnologia}>{tecnologia}</p>
                
                <a href={link} target='_black'>
                  
                    <FiExternalLink/>
                  
                  </a>
                
              </div>
            </div>
              
            </>
            
          )
        })}
          
         
        </main>

       {/* <article className={styles.Projetos_article}>
          <h2>04</h2>          
          <a href="#">Currícolo</a>
        </article>*/}
      </div>
      
  )
}

export default Projetos


/*
  <img src=".//src/components/img/carrosel.JPG"/> 
          <p>feito com: React</p> 
          <a href="#">link do projeto</a>  
*/ 