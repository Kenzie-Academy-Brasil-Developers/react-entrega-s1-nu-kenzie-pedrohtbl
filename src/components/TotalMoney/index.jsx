import './style.css'

const TotalMoney = ({listTransactions}) =>{
    
    return(
        <div className="div__valor">
            <div className="valor__text">
                <p className="total__text">Valor Total:</p>
                <p className="valor__desc">O valor se refere ao saldo</p>  
            </div>
            <p className="total">$ 
            {listTransactions.reduce((acc, element) => element.value + acc ,0)}
            </p>
        </div>
    )
}

export default TotalMoney