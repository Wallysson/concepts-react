# Components and Props

## Components

É um bloco de código que pode ser reutilizável e indepedente para dividir a interface do usuário em menores partes, como por exemplo no twitter.

![image](https://www.freecodecamp.org/portuguese/news/content/images/2022/01/twit.png)

Para criar um componente é uma função que vai envelopar tudo que fizemos e assim limpando e ficando mais fácil para dar manutenção.

```jsx
  export function App() {

    return (
        <div className="App">
          <Person></Person>
          <Person></Person>
          <Person></Person>
          <Person></Person>
        </div>
      );
  }

  function Person () {
    const name = 'Wallysson'
    const age = 32
    const email = 'wallysson@email.com'

    return (
      <div className="App">
          <p> {name} </p>
          <p> {age} </p>
          <p> {email} </p>
      </div>
    );
```

A vantagem que podemos chamar várias vezes o mesmo componente.

## Props

Um dos conceitos mais importantes dos componentes é a comunicação utilizando props (propriedades), e usa para transportar dados para o outro.
Os props enviam dados dos elementos pai para o filho, portanto deve ter cuidado em relação a isso.
Vamos voltar pra função App e o componente Person para utilizar props para ver como maleável fica a solução.

```jsx
export function App() {
  return (
    <div className="App">
      <Person name="Wallysson" age={32} email="wallysson@email.com"></Person>
      <Person name="Leticia" age={25} email="leticia@email.com"></Person>
      <Person name="Renato" age={28} email="renato@email.com"></Person>
    </div>
  )
}

function Person(props) {
  return (
    <div className="App">
      <p> {props.name} </p>
      <p> {props.age} </p>
      <p> {props.email} </p>
    </div>
  )
}
```

Repare como tranportamos as informações name, age, email pelo componente pai App para o componente filho Person. Dentro dele passamos os paramêtros props, caso tenha familiriadade com objetos em Javascript, as informações que chegam nesse props é da seguinte maneira.

```js
  const props = {
    name: 'String',
    age: Number,
    email: 'String
  }
```

Podemos desestruturar as props para deixar o código mais enxuto se necessário

```jsx
function Person({ name, age, email }) {
  return (
    <div className="App">
      <p> {name} </p>
      <p> {age} </p>
      <p> {email} </p>
    </div>
  )
}
```

## Exercicio

Para fixar o que foi dito acima, fazer uma aplicação que irá passar as seguintes informações para o componente Car.

- Modelo
- Proprietário
- Ano de Fabricação
- Valor R$

<details>
  <summary>Resolução</summary>
  
```jsx
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

```

</details>
