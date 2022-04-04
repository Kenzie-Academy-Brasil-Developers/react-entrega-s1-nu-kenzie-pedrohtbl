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
  const [transacao, setTransacao] = useState('')

  const filter = (tipo) =>{
    setFiltro(listTransactions.filter((transaction)=>(transaction.type === tipo)))
  }

  const mostraTodas = () =>{
    setFiltro(listTransactions)
  }

  const remove = (event) =>{
    event.target.className !== 'remove'? setTransacao(event.target.closest('section')) : setTransacao(event.target)
    console.log(transacao)
    setListTransactions(listTransactions.filter(element => Number(element.id) !== Number(transacao.id)))
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <div className='divForm'>
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
