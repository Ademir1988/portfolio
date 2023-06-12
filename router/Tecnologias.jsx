import styles from '../router/Tecnologias.module.css'

import { SiReact , SiCss3, SiJavascript, SiHtml5 } from 'react-icons/Si';



const Tecnologias = () => {
  return (
    <div className={styles.tecno_conteiner}>
        <main className={styles.tecno_main}>
          <h1>Tecnologias</h1>
          
          <div className={styles.content}>

              <div className={styles.HtmlIcon}>
                <SiHtml5 />
                <h3>Html</h3>
              </div>

              <div className={styles.CssIcon}>
                <SiCss3/>
                <h3>Css</h3>
              </div>

              <div className={styles.JavascriptIcon}>
                <SiJavascript />
                <h3>JavaScript</h3>
              </div>

              <div className={styles.reactIcon}>
                <SiReact />
                <h3>Reactjs</h3>
              </div>

          </div>      

        </main>

        <article className={styles.tecno_article}>
          <h2>03</h2>          
          <a href="#">Currícolo</a>
        </article>
      </div>

  )
}

export default Tecnologias