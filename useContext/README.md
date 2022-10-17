# [useContext]()

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