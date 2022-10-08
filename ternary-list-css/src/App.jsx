export function App() {
  const cars = [
    {model: 'Ford', year: 2012, value: 50000},
    {model: 'Fiat', year: 2022, value: 75900},
    {model: 'Chevrolet', year: 1990, value: 4000}
  ]
  return (
    <div>
      {cars.map((car, id) => {
        return (
          <Car model={car.model} year={car.year} value={car.value} id={id} key={id}/>
        )
      })}
    </div>
  )
}

function Car({model, year, value}) {
  return (
    <div>
      <p>Modelo: {model}</p>
      <p>Ano: {year}</p>
      <p>R$ {value}</p>
  </div>
  )
}