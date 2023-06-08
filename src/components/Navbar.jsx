import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { HiOutlineCode } from "react-icons/hi";

const Navbar = () => {
  return (

    <header>
      <nav className={styles.navbar}>
        <h3 className={styles.icon}><HiOutlineCode/></h3>
        
        <div className={styles.content}>
        <Link to='/' className={styles.link}>Home</Link>
        <Link to='/Sobre' className={styles.link}>Sobre</Link>
        <Link to='/Tecnologias' className={styles.link}>Tecnologias</Link>
        <Link to='/Projetos' className={styles.link}>Projetos</Link>
        <Link to='/Contact' className={styles.link}>Contatos</Link>
        
      </div>
        
       
      </nav>
    </header>
  )
}

export default Navbar