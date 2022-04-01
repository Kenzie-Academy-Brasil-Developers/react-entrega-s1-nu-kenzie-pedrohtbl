import Card from "../Card"
import './style.css'


const List = ({listTransactions}) =>{
    return(
        <ul>
            {listTransactions.map(({description, value,type}, index) => <Card description={description} value={value} type={type} key={index}/>)}
        </ul>
    )
}

export default List