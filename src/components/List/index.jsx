import { useState } from "react";
import Card from "../Card"
import Filters from '../Filters';
import './style.css'


const List = ({listTransactions,remove}) =>{

    return(
      
            <ul>
                {listTransactions.map(({description, value,type}, index) => <Card description={description} value={value} type={type} remove={remove} key={index}/>)}
            </ul>
   
        
    )
}

export default List