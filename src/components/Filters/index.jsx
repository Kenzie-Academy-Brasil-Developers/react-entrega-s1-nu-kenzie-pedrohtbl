import './style.css'

const Filters = () =>{
    return (

        <div className='filtros__container'>
            <h1>Resumo financeiro</h1>
            <ul className="filtros">
                <li><button>Todos</button></li>
                <li><button>Entradas</button></li>
                <li><button>Despesas</button></li>
            </ul>
        </div>
        
    )
}

export default Filters