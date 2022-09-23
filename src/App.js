import React, { useEffect } from 'react';
import './App.css';
import UI from './UI';

function App() {

  const [currencyRates, setCurrencyRates] = React.useState({})

  console.log("befor Use Effect")
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest").then(res => res.json(res))
    .then(data =>{ 
      console.log("in side fetch")
      setCurrencyRates(data.rates)})
  },[])
  console.log("befor Use Effect")
    

return (
  <div>
    <UI currencyRates={currencyRates} />
    </div>  
  );
}

export default App;
