

const TotalMoney = ({listTransactions}) =>{
    return(
        <div className="div__valor">
            <div className="valor__text">
                <p className="total__text">Valor Total:</p>
                <p className="valor__desc">O valor se refere ao saldo</p>  
            </div>
            <p className="total">${}</p>
        </div>
    )
}

export default TotalMoney