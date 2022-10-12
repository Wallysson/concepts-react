## [Lifecycle React]()

Os ciclos de vida têm o objetivo de criar e destruir componentes que não estão sendo utilizados. Dessa forma, podemos garantir que os recursos serão alocados somente nos componentes em uso.

O ciclo de vida de um componente possui três fases:

* Montagem: É o “nascimento” ou a inicialização do componente. Nesse momento, o componente será montado na DOM.
* Atualização: Essa etapa acontece depois da montagem do componente na DOM e vai adicionando ou removendo elementos a medida que o componente for recebendo algum tipo de atualização, seja através das props ou do estado.
* Desmontagem: O componente já não é mais necessário e precisa ser removido da tela. Para isso temos uma função que fará esse trabalho para nós.

Para saber mais sobre o ciclo de vida do React, clicar [aqui](https://reactjs.org/docs/state-and-lifecycle.html).

## [useEffect]()

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

### Exercicio: Fazer uma consulta api de Prever Idade

Fazer uma consulta buscando pelo nome e quando clicar no botão, parecer o nome + idade prevista de acordo com a api.
* Input controlado onde guardará o nome;
* Button para gerar idade;
* Usar o nome para fazer a consulta na api.
Api: https://api.agify.io/

<details>
  <summary>Resolução</summary>

```jsx
  import { useState } from "react"
  import axios from 'axios'

  export function PredictedAge() {
    const [name, setName] = useState("")
    const [predictedAge, setPredictedAge] = useState({})
    
    const fetchPredictedAge = async () => {
      await axios.get(`https://api.agify.io/?name=${name}`)
      .then(response => {
        setPredictedAge(response.data)
      })
    }
  
    return (
      <div> 
        <h1>Digite seu nome para prever seu nome</h1>
        <input type="text" placeholder='nome:' onChange={() => setName(event.target.value)}/>
        <button onClick={fetchPredictedAge}>Predicted Age</button>
        <h3>Nome: {predictedAge?.name}</h3>
        <h3>Idade: {predictedAge?.age}</h3>
      </div>
    )
  }
```

</details>

### Exercicio: Fazer uma consulta api de desculpas

Uma api divertida que tem algumas categorias e quando clicar nela vai trazer uma desculpa e mostrar na tela.
Api: https://excuser.herokuapp.com/

* De acordo com a documentação deve criar butões para selecionar a categoria da desculpa;
* Botão para gerar a desculpa;
* Ficar ligado porque o retorno da consulta vai vir em um array e não um objeto;
* Usar o template string na query da consula api.

```jsx
  import axios from "axios"
  import { useState } from "react"

  export function Excuser() {
    const [excuser, setExcuser] = useState("")
    const fetchExcuser = async (category) => {
      await axios.get(`https://excuser.herokuapp.com/v1/excuse/${category}/`)
      .then(response => {
        setExcuser(response.data[0].excuse)
      })
    }

    return (
      <div>
        <h1>Excuser</h1>
        <button onClick={() => fetchExcuser('family')}>Family</button>
        <button onClick={() => fetchExcuser('office')}>Office</button>
        <button onClick={() => fetchExcuser('children')}>Children</button>
        <button onClick={() => fetchExcuser('college')}>College</button>
        <button onClick={() => fetchExcuser('party')}>Party</button>
        <h2>{excuser}</h2>
      </div>
    )
  }
```
