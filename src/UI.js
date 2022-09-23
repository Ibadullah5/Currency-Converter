import React from "react";

export default function UI(props){
  let result;
  let index=0;
  let currencyTypes = []
  for(const key in props.currencyRates){
    currencyTypes[index] = key
    index++;
  }

  const optionElemnts = currencyTypes.map(currency => 
  <option value={currency} key={currency}>{currency}</option>)

  function convertCurrencies(fromCurrencyDollar, toCurrencyDollar, amount){
    const result = toCurrencyDollar/fromCurrencyDollar * amount
    return result
  }


  const [currentInputCurrency, setInputCurrency] = React.useState("PKR")
  const [currentOutputCurrency, setOutputCurrency] = React.useState("USD")
  const [outputField, setOutputField] = React.useState("")
  const [inputField, setInputField] = React.useState("")

  function handleOutputChange(event){
  }
  
  function handleInputChange(event){
    setInputField(event.target.value)
  }

  function changeInputCurrency(event){
      setInputCurrency(event.target.value)
  }
  
  function changeOutputCurrency(event){
    setOutputCurrency(event.target.value)
  }

  function convertPressed(){
    const fromCurrencyCode = currentInputCurrency
    const toCurrencyCode = currentOutputCurrency
    const fromDollar = props.currencyRates[fromCurrencyCode]
    const toDollar = props.currencyRates[toCurrencyCode]
    const amount = inputField
    result = convertCurrencies(fromDollar, toDollar, amount)
    setOutputField(result.toFixed(4))
  }

  return(
    <div className="main-div">
      <div className="div-1">
    <input className="input-fields" type="text" onChange={handleInputChange} name="question" value={inputField} />
    <select className="drops-downs" value={currentInputCurrency} onChange={changeInputCurrency}>
      {optionElemnts}
    </select>
    </div>
    <div style={{marginTop: "3px"}} className="div-2">
    <input className="input-fields" type="text" name="answer" value={outputField} onChange={handleOutputChange} /> 
    <select className="drops-downs" value={currentOutputCurrency} onChange={changeOutputCurrency}>
      {optionElemnts}
    </select>
    </div>
    <div className="div-3">
    <button className="button" onClick={convertPressed}>Convert</button>
    </div>
    </div>
  )
}