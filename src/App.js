import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';

function App() {

  const [countries, setCountries] = useState([])

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then( data => setCountries(data))
  },[])

  return (
    <div className="App">


      <Countries country = {countries}></Countries>





      {/*
        Rest country API
       https://restcountries.com/v3.1/all 
        */}
      
    </div>
  );
}

export default App;
