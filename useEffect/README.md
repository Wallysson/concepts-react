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
