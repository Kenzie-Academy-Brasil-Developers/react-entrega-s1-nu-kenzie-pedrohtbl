 import './style.css'

const Form = ({listTransactions, setListTransactions, handleSubmit}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <div className='desciption__container'>
                <label htmlFor="description">Descrição</label>
                <input id="description" name="description" type="text" placeholder="Digite aqui sua descrição"/>
                <span>Ex: compra de roupas</span>
            </div>
            
            <div className='tipo'>
                <label htmlFor="value">Valor</label>
                <input type="number" name="value" id="value" placeholder="1                 R$"/>
            </div>
            <div className='tipo'>
                <label htmlFor="type" className='label__tipo'>Tipo de valor</label>
                <select id="type">
                    <option>Entrada</option>
                    <option>Saída</option>
                </select>
            </div>
            
            <button type="submit" className='submit'>Inserir Valor</button>
        </form>
    )
}

export default Form