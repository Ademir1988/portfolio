import styles from '../router/Tecnologias.module.css'
import CurriculumButton from './CurriculumButton'

import { SiReact, SiCss3, SiJavascript, SiHtml5, SiGit, SiStyledcomponents } from 'react-icons/Si';



const Tecnologias = () => {
  return (
    <div className={styles.tecno_conteiner}>
      <main className={styles.tecno_main}>
        <h1>Tecnologias</h1>

        <div className={styles.content}>


          <ul>

            <li><SiHtml5 /> Html</li>
            <li><SiCss3 />  Css / Styled-components</li>            
            <li><SiJavascript /> JavaScript</li>
            <li><SiReact /> React</li>
            <li><SiGit /> Git</li>

          </ul>

        </div>

      </main>

      <CurriculumButton />
    </div>

  )
}

export default Tecnologias