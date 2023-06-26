import styles from '../router/Tecnologias.module.css'
import CurriculumButton from './CurriculumButton'

import { SiReact , SiCss3, SiJavascript, SiHtml5 } from 'react-icons/Si';



const Tecnologias = () => {
  return (
    <div className={styles.tecno_conteiner}>
        <main className={styles.tecno_main}>
          <h1>Tecnologias</h1>
          
          <div className={styles.content}>


            <ul>
              <div className="htmlIcon">
                <li><SiHtml5 /> Html</li>

              </div>
              <li><SiCss3/>  Css</li>
              <li><SiJavascript /> JavaScript</li>
              <li><SiReact /> React</li>
            </ul>           
  
          </div>      

        </main>

        <CurriculumButton />
      </div>

  )
}

export default Tecnologias