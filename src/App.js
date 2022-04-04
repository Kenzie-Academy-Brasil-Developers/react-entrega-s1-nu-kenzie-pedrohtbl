import { useState } from 'react';
import Form from './components/Form';
import TotalMoney from './components/TotalMoney';
import List from './components/List';
import Header from './components/Header';
import Filters from './components/Filters';

import './App.css';

function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [filtro, setFiltro] = useState([])

  const filter = (tipo) =>{
    setFiltro(listTransactions.filter((transaction)=>(transaction.type === tipo)))
  }

  const mostraTodas = () =>{
    setFiltro(listTransactions)
  }

  const remove = () =>{
    console.log('oi')
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <div>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          {listTransactions.length > 0  && <TotalMoney listTransactions={listTransactions}/>}
        </div>
        <div className='transacoes'>
            <Filters filter={filter} todas={mostraTodas}/>
          <List listTransactions={filtro.length === 0 ? listTransactions : filtro} remove={remove}/>
        </div>  
      </main>
    </div>
  );
}

export default App;
