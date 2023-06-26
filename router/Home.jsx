import React from 'react'
import { Link } from "react-router-dom";
import styles from '../router/Home.module.css'
import CurriculumButton from './CurriculumButton';


const Home = () => {
  return (         

    <div className={styles.conteiner}>
      

        <main className={styles.main}>
               <h1>Olá!</h1>
               <h2>Me chamo Ademir</h2>
               <p>Desenvolvedor Front-end Junior</p>

               <button className={styles.btn_sobre}>
                   <Link to='/Sobre'>Sobre</Link>
               </button>               
        </main> 

       <CurriculumButton />     
       
  </div>  
          
      
      
  )
}

export default Home