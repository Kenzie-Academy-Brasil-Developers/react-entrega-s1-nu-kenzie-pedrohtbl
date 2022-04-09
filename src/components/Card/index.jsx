import './style.css'
import { FaTrash } from 'react-icons/fa'

const Card = ({description, value, type, id, listTransactions,setListTransactions,setFiltro,list}) =>{
    const remove = () =>{
        setListTransactions(list.filter(transaction =>  transaction.id !== id))
        
        setFiltro(list.filter(transaction =>  transaction.id !== id))
    }
    
    return (
        <li className={`transacao ${type.toLowerCase()}`} >
            <div>
                <h1>{description}</h1>
                <span>{type}</span>
            </div>
            <p>R$ {Math.abs(value)}</p>
            <section id={id} className='remove' onClick={remove}>
                <FaTrash/>
            </section>
        </li>
    )
}

export default Card