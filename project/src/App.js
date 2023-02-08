import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Adder from './components/form';




function App() {
  

  const [members,setMembers]=useState([{
    isim:"Ali",
    email:"Aliveli@veli.com",
    meslek:"Aşçı"
  }]);
  function uyeEkle(item){
    const newMembers=[...members,item];
    setMembers(newMembers);
    console.log(newMembers)
  }

  return (
    <div className="App">
      <header>
        <h1>Kayıt Formu</h1>
      </header>
    <Adder handleSubmitCb={uyeEkle} />
    </div>
  );
}

export default App;
