import styles from '../components/Footer.module.css'
import { BsLinkedin, BsInstagram, BsGithub, BsWhatsapp } from 'react-icons/Bs';

export default function Footer() {
  return (
    <div className={styles.content}>

      <a href="https://www.linkedin.com/in/ademir-silva-a20294274" target="_blank">
          <BsLinkedin />        
        </a>
      <a href="https://www.instagram.com/ademir_0000/?hl=pt-br" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://github.com/Ademir1988?tab=repositories" target="_blank">
        < BsGithub />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5521993209038" target="_blank">
        < BsWhatsapp /> 
      </a>




    </div>
  )
}
