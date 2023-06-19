import React from 'react'
import styles from '../router/Projetos.module.css'
import Proj from '../src/Projetos.json'

const Projetos = () => {
  return (
   
    <div className={styles.Projetos_conteiner}>
        <main className={styles.Projetos_main}>
          <h1>Projetos</h1>
          
        {Proj.map((item)=>{
          const {image, tecnologia, link} =item
          return(
            <>
              <img src={image}/> 
              <p>feito com: {tecnologia}</p> 
              <a href={link} target='_black'>link do projeto</a>
            </>
            
          )
        })}
          
         
        </main>

        <article className={styles.Projetos_article}>
          <h2>04</h2>          
          <a href="#">Currícolo</a>
        </article>
      </div>
      
  )
}

export default Projetos


/*
  <img src=".//src/components/img/carrosel.JPG"/> 
          <p>feito com: React</p> 
          <a href="#">link do projeto</a>  
*/ 