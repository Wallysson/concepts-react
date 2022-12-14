# Conceitos em React

O React foi lançado em 2013, é uma biblioteca Javascript de código aberto e para criação de aplicações front-end. Desenvolvido pelo Facebook para criação de elementos de interface reutilizáveis de forma simples e intuitiva e com uma ótima performance.
Algumas das caracteristicas do React para o desenvolvimento da aplicação é:

- **Utilização do Javascript:** o JS é uma das principais linguagens de desenvolvimento do mundo;
- **Componentização:** utiliza components para criação de interfaces assim garantindo uma maior flexibilidade e reutilização de interfaces;
- **Amplamente utilizado:** é uma das principais tecnologias para desenvolvimento web, sendo assim uma comunidade grande e engajada que faz a lib continuar sempre em crescimento.

Consolidado no mundo web, o React é utilizado pelas maiores empresas do mundo como: Facebook, Notion, Spotify, Airbnb, etc.

## [Configurando um ambiente react](ttps://github.com/Wallysson/concepts-react/tree/main/setting-react)

A ferramenta que estou utilizando é o [Vite](https://vitejs.dev/) por ser mais rápido sua instalação e mais pela sua facilidade.

Para configuração é necessário ter o [Node](https://nodejs.org/en/) instalado em sua máquina.
No terminal utilizar o seguinte comando:

```
  npm create vite@latest

  cd my-project

  npm install
  npm run dev
```

Já deixei uma pasta pré configurada que é só baixar e começar a utilizar e pode encontrar no github [aqui](https://github.com/Wallysson/concepts-react/tree/main/setting-react).

## Sintaxe

No React a extensão para seus arquivos é o JSX (Javascript XML). No inicio pode parecer um pouco estranho, porque o JSX utiliza o HTML dentro de funções JS, isso pode atrapalhar inicialmente, mas depois irá se acostumar.

```jsx
export function App() {
  const name = 'Wallysson'
  const age = 32
  const email = 'wallysson@email.com'

  return (
    <div className="App">
      <p> {name} </p>
      <p> {age} </p>
      <p> {email} </p>
    </div>
  )
}
```

No JSX quando queremos usar alguma sinxtaxe Javascript é necessário utilizar {} dentro da tag HTML para visualizar na tela.

## [Components](https://github.com/Wallysson/concepts-react/tree/main/components-props)

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

## [Props](https://github.com/Wallysson/concepts-react/tree/main/components-props)

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
    email: 'String'
  }
```

Podemos desestruturar as props para deixar o código mais enxuto se necessário

```jsx
  function Person ({name, age, email}) {
  return (
    <div className="App">
        <p> {name} </p>
        <p> {age} </p>
        <p> {email} </p>
    </div>
  );
}
```

## [Operador Ternário](https://github.com/Wallysson/concepts-react/tree/main/ternary-list-css)

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

## [CSS com React](https://github.com/Wallysson/concepts-react/tree/main/ternary-list-css)

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

## [Listas em React](https://github.com/Wallysson/concepts-react/tree/main/ternary-list-css)

Em vários momentos no react vai ser necessário listar os items que vem de um array e para não ter que criar de forma manual todos os registros, a maneira inteligente e correta é utilizar o ```.map()```.

Se olharmos a documentação do [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) o map é uma função que devolve um Array como resultado.

### Exemplo: Mapeando um array de números para um array de raízes quadradas

O código a seguir mapeia um array de números e cria um novo array contendo o valor da raiz quadrada de cada número do primeiro array.

```js
  var numbers = [1, 4, 9];
  var roots = numbers.map(Math.sqrt);
  // roots é [1, 2, 3], numbers ainda é [1, 4, 9]
```

### Exemplo: Mapeando um array de números usando uma função callback que contém um argumento

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

## [React Hooks](https://github.com/Wallysson/concepts-react/tree/main/useState)

A partir da versão 16.8 do React a proposta de utilizar Hooks foi aceita e permite usar estados, ciclos de vida, entre outras funcionalidades, sem a necessidade de escrever componentes com classe.

### Motivação

Os Hooks resolvem uma grande variedade de problemas encontrados durante o desenvolvimento de componentes. Por exemplo:

* Reutilização de lógica de estado entre components;
* Wrapper Hell (HOC, Render props — React DevTools);
* Componentes complexos e difíceis de se compreender;
* Componentes contendo grandes responsabilidades;
* Confusão ao utilizar classes (this, classes).‍‍

## [useState](https://github.com/Wallysson/concepts-react/tree/main/useState)

Nos permite criar estados em um componente criado a partir de uma função. Ele cria uma variável que controla o estado do componente. Para isso passamos o valor inicial do estado e importamos useState do React.

Sintaxe:

```jsx
  import React, { useState } from "react"

  const [state, setState] = useState(0)
  // state: 'variável' que armazena o valor;
  // setState: função que altera o valor;
  // useState(): chamada do hook, e dentro dos parênteses temos o valor inicial.
```

### Imuntabilidade

Recomenda-se nunca haver modificações diretamente no estado do componente. Em outras palavras, evite alterar o valor manualmente, pois isso acaba gerando um erro e travando o seu componente. Por isso o ideal é que haja uma evolução desse estado.
Dessa forma, dentro do mesmo projeto podemos ter vários valores diferentes que estarão associados ao componente. Uma vez que sua estrutura é bem flexível, pode receber praticamente qualquer dado.

### Exemplo: Mostrar e esconder texto

Vamos usar o useState para manipular se o texto vai ser visualizado na tela ou será escondido de acordo com o clique do usuário para

```jsx
  import { useState } from "react"

  export function ShowHideText() {
    const [showText, setShowText] = useState(false)
    return (
      <div>
        <button onClick={() => setShowText(!showText)}>Show/Hide Text</button>
        {showText && <h1>Hello World!</h1>}
      </div>
    )
  }
```

### Exemplo: Mudar a cor do texto

Alterar a cor do texto, o padrão será preto, mas quando clicar no butão irá fazer uma verificação se já é preto, se for mudar pra vermelho, se não for, voltar pra preto.

```jsx
  import { useState } from "react"

  export function ChangeColor() {
    const [changeColor, setChangeColor] = useState('black')
    return (
      <div>
        <h1 style={{color: changeColor}}>Hello World</h1>
        <button onClick={() => setChangeColor(changeColor === 'black' ? 'red' : 'black')}>Change Color</button>
      </div>
    )
  }
```

### Exemplo: Contador para aumentar, diminuir e reiniciar

Se o contador for menor que 0, mudar o valor da cor do texto para vermelho.

```jsx
  import { useState } from "react"

  export function Count() {
    const [count, setCount] = useState(0)
    // useState com valor inicial 0

    function handleIncreaseCount() {
      setCount(state => state + 1)
    }

    function handleDecreaseCount() {
      setCount(state => state - 1)
    }

    function handeSetToZero() {
      setCount(0)
    }

    // Essas funções vão pegar o estado atual aumentando, diminuindo ou resetando o count

    return (
      <div>
        <h1>Count</h1>
        <div style={{display: 'flex', gap: 8}}>
          <button onClick={handleIncreaseCount}>Increase</button>
          <button onClick={handleDecreaseCount}>Decrease</button>
          <button onClick={handeSetToZero}>Set To 0</button>
          {/* Dentro do button usar o evento onClick para chamar as funções */}
        </div>
        <h3 style={{color: count >= 0 ? 'green' : 'red'}}>{count}</h3>
          {/* Usando condições para mostrar a cor verde ou vermelho de acordo com o valor */}
      </div>
    )
  }
```

## [Lifecycle React](https://github.com/Wallysson/concepts-react/tree/main/useEffect)

Os ciclos de vida têm o objetivo de criar e destruir componentes que não estão sendo utilizados. Dessa forma, podemos garantir que os recursos serão alocados somente nos componentes em uso.

O ciclo de vida de um componente possui três fases:

Montagem: É o “nascimento” ou a inicialização do componente. Nesse momento, o componente será montado na DOM.
Atualização: Essa etapa acontece depois da montagem do componente na DOM e vai adicionando ou removendo elementos a medida que o componente for recebendo algum tipo de atualização, seja através das props ou do estado.
Desmontagem: O componente já não é mais necessário e precisa ser removido da tela. Para isso temos uma função que fará esse trabalho para nós.

Para saber mais sobre o ciclo de vida do React, clicar [aqui](https://reactjs.org/docs/state-and-lifecycle.html).

## [useEffect](https://github.com/Wallysson/concepts-react/tree/main/useEffect)

Você provavelmente já realizou obtenção de dados (data fetching), subscrições (subscriptions) ou mudanças manuais no DOM através de componentes React antes. Nós chamamos essas operações de “efeitos colaterais” (side effects ou apenas effects) porque eles podem afetar outros componentes e não podem ser feitos durante a renderização.
O Hook de Efeito, useEffect, adiciona a funcionalidade de executar efeitos colaterais através de um componente funcional.

Sintaxe: 

```jsx
  import React, { useState, useEffect } from 'react';

  useEffect((), {}, [])
```

Quando o useEffect é chamado, o React executa a função de 'efeito' após liberar as mudanças para o DOM. Efeitos são declarados dentro do componente, para que eles tenham acesso as suas props e state. Por padrão o React executa os efeitos a cada renderização.

### Exemplo: Contador que muda o título a cada alteração

Toda vez que o contador é aumentado, vamos colocar no título da página o valor.

```jsx
  import { useEffect, useState } from "react"

  export function Count() {
    const [count, setCount] = useState(0)

    useEffect(() => {
      document.title = `Contou ${count} vezes`
    }, [count])

    function handleIncreaseCount() {
      setCount(state => state + 1)
    }

    return (
      <>
        <h1>Contador no titulo</h1>
        <button onClick={handleIncreaseCount}>+</button>
        <p>{count}</p>
      </>
    )
  }
```

### Exemplo: Data Fetching uma api de conselhos

Usar o fetch() para buscar informações da api e mostrar pro usuário o conselho do dia.

```jsx
  import { useEffect, useState } from "react"

  export function FetchFunction() {
    const [quotes, setQuotes] = useState('')

    const fetchNewQuote = async () => {
      await fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data=> setQuotes(data.slip.advice))
    }

    useEffect(() => {
      fetchNewQuote()
    })

    return (
      <div>
        <button onClick={fetchNewQuote}>Gerar frase</button>
        <h1>{quotes}</h1>
      </div>
    )
  }
```

### Exemplo: Usando Axios no lugar de Fetch

No lugar de usar o fetch() vamos usar agora o axios porque acredito que seja mais fácil seu entendimento.

Instalando pacote: 
``` 
  npm i axios 
```

```jsx
  import { useEffect, useState } from "react"
  import axios from 'axios'

  export function GetWithAxios() {
    const [curiosities, setCuriosities] = useState('')

    const fetchNewCuriosity = async () => {
      await axios.get('https://catfact.ninja/fact')
      .then(response => {
        setCuriosities(response.data.fact)
      })
    }

    useEffect(() => {
      fetchNewCuriosity()
    }, [])

    return (
      <div>
        <button onClick={fetchNewCuriosity}>Gerar frase</button>
        <h1>{curiosities}</h1>
      </div>
    )
  }
```

### Exemplo: Buscar a lista de Pokémon usando uma api

Uma das primeiras api a trabalhar é o do Pokémon, fazer uma busca com a lista e mostrar na tela.
Api: https://pokeapi.co/api/v2/pokemon

```jsx
  import { useEffect, useState } from "react";

  export function PokemonApi() {
      const [pokemons, setPokemon] = useState([]);

      const fetchPokemon = async () => {
        await fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data.results);
        });
      }

      useEffect(() => {
        fetchPokemon()
      }, []);

      return (
          <>
              <ul>
                  {pokemons.map((pokemon, key) => (
                      <li key={key}>
                          {pokemon.name}
                      </li>
                  ))}
              </ul>
          </>
      );
  }
```

## [Router DOM](https://github.com/Wallysson/concepts-react/tree/main/router-dom)

Em um site precisamos acessar várias paginas, como por exemplo em loja de roupas, teremos a página home, contatos, sobre o empreendimento, perfil, etc. Para navegar vamos utilizar o [React Router DOM](https://v5.reactrouter.com/). 

Instalando pacote axios: 
``` 
  npm install react-router-dom 
```

Com o pacote instalado no projeto, agora vamos criar um arquivo de rotas, será o Router.jsx. Para exemplificar, dentro da pasta src, criei uma pasta page para simular como acessar as rotas.

O arquivo Router.jsx ficou assim: 

```jsx
  import { Routes, Route } from 'react-router-dom'
  import { Home } from './pages/Home'
  import { About } from './pages/About'
  import { Profile } from './pages/Profile'

  export function Router() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    )
  }
```

* Route: componente que associa a rota a page. Nele temos dois elementos, path e element. O path é o caminho da URL que precisa para ser acessado a page. E o element é qual componente que vai ser exibido em tela.

No App.jsx precisamos importar o nosso arquivo Router e envelopar ele com o BrowerRouter da seguinte forma.

```jsx
  import { Router } from "./Router";
  import { BrowserRouter } from 'react-router-dom'

  export function App() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    )
  }
```

* BrowserRouter: É um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes.

Nas pages que são chamados pelo React Router DOM podemos criar links para não terem que ficar acessando todas as vezes pela URL do navegador.

Arquivo Home.jsx

```jsx
  import { Link } from "react-router-dom";

  export function Home() {
    return (
      <div>
        <h1>HOME</h1>
        <Link to="/about">About</Link>
        <br />
        <Link to="/profile">Profile</Link>
      </div>
    )
  }
```

* Link: É um componente da biblioteca router dom e tem o parâmetro to que colocamos pra onde seremos enviado ao clicar.

## [useContext]()

Usar o contexto React requer poucas coisas. Primeiro, você deve criar um contexto. Você consegue isso usando o createContext()método enviado com o React. Este contexto será o estado global disponível para uso no aplicativo. Bem, pelo menos um deles, porque seu aplicativo React pode conter um número infinito de contextos.

Primeiro passo é uma const que será o nosso contexto.

```jsx
  import { createContext, useState } from 'react'

  export const AppContext = createContext()
```

E depois precisamos envelopar todos os componentes que vão fazer parte do contexto, por exemplo, contexto do carrinho de compras ou o nome do usuário em todas as telas, etc.
No código abaixo criei uma pasta contexts porque posso ter mais que um no projeto e dentro dele um arquivo chamada AppContext que ficará por volta de toda a aplicação.

AppContext.jsx

```jsx
  export function AppProvider ({children}) {
    const [name, setName] = useState("Wallysson")
    return (
      <AppContext.Provider value={{ name, setName }}>
        {children}
      </AppContext.Provider>
    )
  }
```

<details>
  <summary>Código completo</summary>
  
```jsx
  import { createContext, useState } from 'react'

  export const AppContext = createContext()

  export function AppProvider ({children}) {
    const [name, setName] = useState("Wallysson")
    return (
      <AppContext.Provider value={{ name, setName }}>
        {children}
      </AppContext.Provider>
    )
  }
```

</details>

Dentro do App.jsx chamei a função por volta de todos os componentes.

```jsx
  import { Router } from "./Router";
  import { BrowserRouter } from 'react-router-dom'
  import { AppProvider } from "./contexts/AppContext";

  export function App() {
    return (
      <BrowserRouter>
        <AppProvider>
        <Router />  
        </AppProvider>
      </BrowserRouter>
    )
  }
```

Vamos supor o seguinte, precisamos passar a informação do 'name' para todas as páginas, mas no componente ChangeName precisamos trocar e isso refletirá em todas as telas. Já aprendemos a passar propriedades em componentes pais para filhos, porém pra não ficar complexo e de dificil manutenção, podemos criar um contexto, ele ficará por volta de toda aplicação, colocamos o estado de nome e alterar o nome no contexto e enviando somente setName para o componente, sem a necessidade de ter que ir passando componente por componente.

ChangeProfile.jsx

```jsx
  import { useContext, useState } from "react"
  import { AppContext } from "../contexts/AppContext"

  export function ChangeProfile() {
    const [ newName, setNewName ] = useState("")
    const { setName } = useContext(AppContext)
    return (
      <div>
        <input 
          type="text" 
          placeholder="Troque seu nome"
          onChange={(event) => setNewName(event.target.value)}
        />
        <button 
          onClick={() => setName(newName)}
        >
          Change Name
        </button>
      </div>
    )
  }
```

Dessa forma utilizamos o hook useContext com a constante AppContext que criamos para criar todo contexto, pegamos só o setName e podemos utilizar ele pra trocar o nome. Muito mais simples do que passar várias props.

### Cuidado com o useContext

Um componente que chama useContext será sempre renderizado novamente quando o valor do contexto for alterado.