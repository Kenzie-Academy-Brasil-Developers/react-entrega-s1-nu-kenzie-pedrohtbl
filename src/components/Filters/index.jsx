import './style.css'

const Filters = ({filter,todas}) =>{


    return (
        <div className='filtros__container'>
            <h1>Resumo financeiro</h1>
            <ul className="filtros">
                <li><button onClick={()=>{todas()}}>Todos</button></li>
                <li><button onClick={()=>{filter('Entrada')}}>Entradas</button></li>
                <li><button onClick={()=>{filter('Saída')}}>Despesas</button></li>
            </ul>
        </div>
        
    )
}

export default Filters