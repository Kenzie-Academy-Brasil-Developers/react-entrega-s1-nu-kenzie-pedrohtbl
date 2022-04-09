import { useState } from 'react';
import Form from './components/Form';
import TotalMoney from './components/TotalMoney';
import List from './components/List';
import Header from './components/Header';
import Filters from './components/Filters';

import './App.css';
import NoCard from './components/NoCard';

function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [filtro, setFiltro] = useState([])

  const filter = (tipo) =>{
    setFiltro(listTransactions.filter((transaction)=>(transaction.type === tipo)))
  }

  const mostraTodas = () =>{
    setFiltro(listTransactions)
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <div className='divForm'>
          <Form listTransactions={listTransactions} setFiltro={setFiltro} setListTransactions={setListTransactions}/>
          {listTransactions.length > 0  && <TotalMoney listTransactions={listTransactions}/>}
        </div>
        <div className='transacoes'>
          <Filters filter={filter} todas={mostraTodas}/>
          {listTransactions.length === 0 && filtro.length === 0 ? (<NoCard/>) :
          (<List listTransactions={filtro.length === 0 ? listTransactions : filtro} list={listTransactions} setListTransactions={setListTransactions} setFiltro={setFiltro}/>)
          }
          
        </div>  
      </main>
    </div>
  );
}

export default App;
