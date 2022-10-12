# [Router DOM](https://github.com/Wallysson/concepts-react/tree/main/useEffect)

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