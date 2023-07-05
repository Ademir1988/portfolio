import React from 'react'
import styles from '../router/Projetos.module.css'
import Proj from '../src/Projetos.json'
import { useRef } from 'react'
import { FiExternalLink }from 'react-icons/Fi'
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/Bi'

const Projetos = () => {

  const carrosel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft += carrosel.current.offsetWidth;
  };



  return (
    <>
   
    <div className={styles.Projetos_conteiner}>
        <main className={styles.Projetos_main} ref={carrosel} >
         
          
        {Proj.map((item)=>{
          const {image, description, link, id} =item
          return(
            
            <div  className={styles.projetos_item} key={id} >
              <div className={styles.projetos_image}>
                  <img  src='./src/components/img/carrosel.JPG' alt='imagem-projeto'/>
                  
                  
              </div>
              <div className={styles.projetos_info}>

                <p className={styles.projetos_tecnologia} >{description}</p>

                <div className={styles.icone_ancora}>
                <a  href={link} target='_black'>
                   <FiExternalLink/>                 
                  </a>
                </div>              
              </div>


            </div>
                
              
            
            
            )
          })}         
          
         
        </main>      
        

      
      </div>
      <div className={styles.buttons}>
                  <button onClick={handleLeftClick}>
                     <BiChevronLeftCircle/> 
                  </button>
                  <button onClick={handleRightClick}>
                      <BiChevronRightCircle/>
                  </button>
           </div>
          
      </>
  )
}

export default Projetos


/*
  <img src=".//src/components/img/carrosel.JPG"/> 
          <p>feito com: React</p> 
          <a href="#">link do projeto</a>  
*/ 