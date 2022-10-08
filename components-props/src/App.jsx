export function App() {
  return (
    <div className="App">
      <h1>Cars</h1>
      <Car model="Ferrari" owner="Elon" age={2010} value={500000}/>
      <Car model="Mclaren" owner="Leticia" age={2020} value={700000}/>
      <Car model="Ford" owner="Alberto" age={2015} value={50000}/>
    </div>
  )
}

function Car({model, owner, age, value}) {
  return (
    <>
      <p>Model: {model}</p>
      <p>Owner: {owner}</p>
      <p>Age: {age}</p>
      <p>R$: {value}</p>
    </>
  )
}