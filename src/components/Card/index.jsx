
import { useState } from 'react'
import trash from '../../trash.svg'
import './style.css'

const Card = ({description, value, type}) =>{

    const [tipo, setTipo] = useState('')

    const defineTipo = () =>{
        type === 'Entrada'? setTipo('entrada') : setTipo('saida')
        return tipo
    }

    return (
        <li className= {defineTipo}>
            <div>
                <h1>{description}</h1>
                <span>{type}</span>
            </div>
            <p>{value}</p>
            <button><img src={trash}/></button>
        </li>
    )
}

export default Card