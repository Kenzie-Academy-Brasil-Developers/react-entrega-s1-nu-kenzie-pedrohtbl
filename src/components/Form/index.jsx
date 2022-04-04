 import { useState } from 'react'
import './style.css'

const Form = ({listTransactions, setListTransactions}) =>{

    const [name, setName] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('Entrada')

    const handleSubmit = (event) =>{
        event.preventDefault()
    
        type === 'Saída' ?
        setListTransactions([...listTransactions,{description: name, type: type, value:-1*(Number(value))}])
        :
        setListTransactions([...listTransactions,{description: name, type: type, value:Number(value)}])
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className='desciption__container'>
                <label htmlFor="description">Descrição</label>
                <input onChange={(event) => setName(event.target.value)} id="description" name="description" type="text" placeholder="Digite aqui sua descrição"/>
                <span>Ex: compra de roupas</span>
            </div>
            
            <div className='tipo'>
                <label htmlFor="value">Valor</label>
                <input onChange={(event) => setValue(event.target.value)} type="number" name="value" id="value" placeholder="1                 R$"/>
            </div>
            <div className='tipo'>
                <label htmlFor="type" className='label__tipo'>Tipo de valor</label>
                <select id="type" onChange={(event) => setType(event.target.value)}>
                    <option value={'Entrada'}>Entrada</option>
                    <option value={'Saída'}>Saída</option>
                </select>
            </div>
            
            <button type="submit" className='submit'>Inserir Valor</button>
        </form>
    )
}

export default Form