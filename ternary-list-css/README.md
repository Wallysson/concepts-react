# Operador Ternário, CSS, Listas em React

## Operador Ternário

No desenvolvimento de alguma aplicação é muito comum utilizarmos estruturas condicionais como por exemplo, if e else ou switc. Porém, em alguns momentos esses testes tem apenas duas possibilidades, e nesse momento podemos utilizar o operador ternário para melhorar a escrita.
No React o operador ternário tem mais uma função que é mostrar para o usuário somente o comportamento necessário daquele componente.

Utilizando if e else, repare como o código fica maior.

```jsx
  export function App() {
    const age = 18

    if (age >= 18) {
      return <h1>Driver with permission</h1>
    } else {
      return <h1>Driver without permission</h1>
    } 
  }
```

A sintaxe do operador ternário utilizando o exemplo acima:
```jsx
  export function App() {
    const age = 18

    return (
      <div>
        {age >= 18 ? <h1>Driver with permission</h1> : <h1>Driver without permission</h1>}
      </div>
    )
  }
```

Primeiro temos a condição, como se o 'age' for maior ou igual a 18, o '?' é o que vai renderizar o que for verdadeiro e o ':' o que for falso.

Outra forma de escrever é só acontecer quando for verdade e então utilizando o operador '&&'

```jsx
  {age >= 18 && 'Yes'}
```

## CSS com React

Segundo o site da [w3schools](https://www.w3schools.com/react/react_css.asp) há várias formas de escrever arquivos React com CSS

* [Inline Styling](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_css_inline): Para estilizar um elemento inline o valor deve ser um objeto Javascript.
* [camelCased Property Names](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_css_camelcase): Desde que o inline CSS é escrito em objeto Javascript, propriedades com dois nomes como background-color, devem ser escritos backgroundColor.
* [JavaScript Object](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_css_inline_object): Você também pode criar um objeto com as informações do estilo e referenciar ele no style.
* [CSS Stylesheet](https://www.w3schools.com/react/showreact.asp?filename=demo4_react_css): Criar um novo arquivo com extensão .css e importar em sua aplicação.
No arquivo CSS:
```css
  body {
    background-color: #282c34;
    color: white;
    padding: 40px;
    font-family: Arial;
    text-align: center;
}
```
No arquivo JSX: 
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

  class MyHeader extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello Style!</h1>
          <p>Add a little style!.</p>
        </div>
      );
    
  }
  }

ReactDOM.render(<MyHeader />, document.getElementById('root'));
```
* [CSS Modules](https://www.w3schools.com/react/showreact.asp?filename=demo5_react_css_module): Criar um novo arquivo com extensão 'mystyle.module.css' e importar em sua aplicação.
No arquivo .module.css:
```css
  body {
  .bigblue {
    color: DodgerBlue;
    padding: 40px;
    font-family: Arial;
    text-align: center;
  }
}
```
No arquivo JSX: 
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './mystyle.module.css'; 

class Car extends React.Component {
  render() {
    return <h1 className={styles.bigblue}>Hello Car!</h1>;
  }
}

export default Car;
```

## Listas em React

Em vários momentos no react vai ser necessário listar os items que vem de um array e para não ter que criar de forma manual todos os registros, a maneira inteligente e correta é utilizar o ```.map()```.

Se olharmos a documentação do [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) o map é uma função que devolve um Array como resultado.

### Exemplos

#### Exemplo: Mapeando um array de números para um array de raízes quadradas

O código a seguir mapeia um array de números e cria um novo array contendo o valor da raiz quadrada de cada número do primeiro array.

```js
  var numbers = [1, 4, 9];
  var roots = numbers.map(Math.sqrt);
  // roots é [1, 2, 3], numbers ainda é [1, 4, 9]
```

#### Exemplo: Mapeando um array de números usando uma função callback que contém um argumento

O código a seguir mostrar como o método map funciona quando a função callback possui apenas um argumento. Esse argumento será automaticamente atribuído para cada elemento do array conforme o map itera sobre o array original.

```js
  var numbers = [1, 4, 9];
  var doubles = numbers.map(function(num) {
    return num * 2;
  });
  // doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
```

Vamos supor que temos informações de um array de filmes e precisamos visualizar na tela. A forma mais simples, seria fazer o hard code e colocar um por um, mas isso não é interessante quando trabalhamos com listas dinâmicas ou grandes.

```jsx
  export function App() {
    const movies = ['Spider-Man', 'Superman', 'XMen', 'Avengers'] 
    return (
      <div>
        <h1>{movies[0]}</h1>
        <h1>{movies[1]}</h1>
        <h1>{movies[2]}</h1>
        <h1>{movies[3]}</h1>
      </div>
    )
  }
```

Pra melhorar a escrita de deixar dinâmico, podemos usar a função map para retornar os valores.

```jsx
  export function App() {
    const movies = ['Spider-Man', 'Superman', 'XMen', 'Avengers'] 
    return (
      <div>
        {movies.map((movie, id) => {
          return (
            <h1 key={id}>{movie}</h1>
          )
        })}
      </div>
    )
  }
```

Repare que passo duas informações no callback, movie e id. O id é necessário para a key quando usa o map em [react](https://reactjs.org/docs/lists-and-keys.html). Segundo a documentação keys são importante para identificar qual item mudou, foi adicionado ou removido. A chave precisa ser uma identificação única.

Muitas vezes vamos receber um array com vários objetos para poder trabalhar, como uma lista de carros. A diferença que vamos ter que acessar a propriedade dele de acordo com que queremos.

```jsx
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
```

Usei o que aprendemos em props e components, criei um componente Car, com propriedades model, year e value que as informações que chegam na lista cars.
Dessa forma o map vai percorrer toda lista, criar cada componente pra cada item e assim mostrar na tela.

## Exercicio

De acordo com o que aprendemos em componentização, propriedades e listas, operador ternário, criar uma visualização que irá parecer lista do tipo 'food' ou 'clothes'

```js
  const purchases = [
    {name: 'apple', type: 'food'},
    {name: 't-shirt', type: 'clothes'},
    {name: 'rice', type: 'food'},
    {name: 'orange', type: 'food'},
    {name: 'shorts', type: 'clothes'}
  ]
```
<details>
  <summary>Resolução</summary>
  
```jsx
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
```

</details>