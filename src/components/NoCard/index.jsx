import noCard from '../../NoCard.svg'
import './style.css'

const NoCard = () =>{
    return (
        <>
        <div className='vazio'>
            <h1>Você não possui nenhum lançamento</h1>
            <div className={`cardVazio`} >
                    <h1></h1>
                    <span></span>
            </div>
            <div className={`cardVazio`} >
                    <h1></h1>
                    <span></span>
            </div>
            <div className={`cardVazio`} >
                    <h1></h1>
                    <span></span>
            </div>
        </div>
        </>
    )
}

export default NoCard