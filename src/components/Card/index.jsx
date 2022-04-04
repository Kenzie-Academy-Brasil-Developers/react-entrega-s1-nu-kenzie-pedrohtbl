import trash from '../../trash.svg'
import './style.css'
import { FaTrash } from 'react-icons/fa'

const Card = ({description, value, type ,remove}) =>{
    
    return (
        <li className={`transacao ${type.toLowerCase()}`} >
            <div>
                <h1>{description}</h1>
                <span>{type}</span>
            </div>
            <p>R$ {Math.abs(value)}</p>
            <div id='remove' onClick={()=>{remove()}}>
                <FaTrash/>
            </div>
        </li>
    )
}

export default Card