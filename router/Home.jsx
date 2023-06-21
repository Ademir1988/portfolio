import React from 'react'

import { Link } from "react-router-dom";
import styles from '../router/Home.module.css'

const Home = () => {
  return (
    
      <div className={styles.conteiner}>

        <main className={styles.main}>
          <h1>Olá!</h1>
          <h2>Me chamo Ademir</h2>
          <p>Desevolvedor Front-end Junior</p>

          <button>
              <Link to='/Sobre'>Sobre</Link>
          </button>      
          

        </main>

        
        <article>
          <h2>01</h2>          
          <a href="#">Currícolo</a>
        </article>


      </div>
      
      
      
      
  )
}

export default Home