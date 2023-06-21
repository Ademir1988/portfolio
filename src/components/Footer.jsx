import styles from '../components/Footer.module.css'
import { BsLinkedin, BsInstagram, BsGithub, BsWhatsapp} from 'react-icons/Bs';

export default function Footer(){
  return (
    <div className={styles.content}>
        
       <a href="#"><BsLinkedin /></a>
       <a href="#"><BsInstagram /></a>
       <a href="#">< BsGithub /></a>
       <a href="#">< BsWhatsapp /></a>
       
        
        
        
    </div>
  )
}
