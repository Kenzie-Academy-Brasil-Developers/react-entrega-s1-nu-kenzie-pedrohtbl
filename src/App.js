import { useState } from 'react';
import Form from './components/Form';
import TotalMoney from './components/TotalMoney';
import List from './components/List';
import Header from './components/Header';
import Filters from './components/Filters';
import './App.css';

function App() {
  const [listTransactions, setListTransactions] = useState([])

  const handleSubmit = (event) =>{
    event.preventDefault()
    const descricao = event.target.children[0].children[1].value
    const valor = event.target.children[1].children[1].value
    const tipo = event.target.children[2].children[1].value
    
    setListTransactions([...listTransactions,{description: descricao, type: tipo, value:Number(valor)}])

  }

  return (
    <div className="App">
      <Header/>
      <main>
        <Form handleSubmit={handleSubmit}/>
        <div className='transacoes'>
          <Filters/>
          <List listTransactions={listTransactions}/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
