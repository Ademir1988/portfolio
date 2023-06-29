import '../CurriculumButton/index.css'
import { SiReact } from 'react-icons/Si';

export default function CurriculumButton() {
    return (
        <article>
            <h2><SiReact /></h2>

            <button className="learn-more">
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>                
                <span className="button-text">
                    <a href="https://ademir1988.github.io/curriculo/" target='_black'>Currículo</a>
                    </span>
            </button>            

        </article>
    )
}