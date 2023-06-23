import '../CurriculumButton/index.css'
import { SiReact } from 'react-icons/Si';

export default function CurriculumButton(){
    return(
        <article>
            <h2><SiReact/></h2>     
        <button className='btn_curriculo'>
            <a href=" https://ademir1988.github.io/curriculo/" target='_black'>Currículo</a>  
                    
        </button>
            
      </article>
    )
}