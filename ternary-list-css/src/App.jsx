export function App() {
  const purchases = [
    {name: 'apple', type: 'food'},
    {name: 't-shirt', type: 'clothes'},
    {name: 'rice', type: 'food'},
    {name: 'orange', type: 'food'},
    {name: 'shorts', type: 'clothes'}
  ]

  return (
    <div>
      <h1>Shopping List</h1>
      <h2>Food</h2>
        {purchases.map((purchase, id) => {
          return (
            purchase.type === 'food' && <ListPurchase name={purchase.name} key={id}/>
          )
        })}
      <h2>Clothes</h2>
      {purchases.map((purchase, id) => {
          return (
            purchase.type === 'clothes' && <ListPurchase name={purchase.name} key={id}/>
          )
        })}
    </div>
  )
}

function ListPurchase({name}) {
  return (
    <p>{name}</p>
  )
}