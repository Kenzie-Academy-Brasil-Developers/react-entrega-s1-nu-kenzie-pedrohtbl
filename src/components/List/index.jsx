import Card from "../Card"
import './style.css'


const List = ({listTransactions,setListTransactions,setFiltro, list}) =>{

    return(
      
            <ul>
                {listTransactions.map(({description, value,type,id}, index) => <Card 
                setFiltro={setFiltro} 
                list ={list}
                setListTransactions={setListTransactions}
                listTransactions={listTransactions} 
                description={description} 
                id={id} 
                value={value} 
                type={type} 
                key={index}/>)}
            </ul>
   
        
    )
}

export default List