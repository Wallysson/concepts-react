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

```
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
    );
  }
```

No JSX quando queremos usar alguma sinxtaxe Javascript é necessário utilizar {} dentro da tag HTML para visualizar na tela.

## Components

É um bloco de código que pode ser reutilizável e indepedente para dividir a interface do usuário em menores partes, como por exemplo no twitter.

![image](https://www.freecodecamp.org/portuguese/news/content/images/2022/01/twit.png)

Para criar um componente é uma função que vai envelopar tudo que fizemos e assim limpando e ficando mais fácil para dar manutenção.

```
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

```
  export function App() {

    return (
        <div className="App">
          <Person name="Wallysson" age={32} email="wallysson@email.com"></Person>
          <Person name="Leticia" age={25} email="leticia@email.com"></Person>
          <Person name="Renato" age={28} email="renato@email.com"></Person>

        </div>
      );
  }

  function Person (props) {
    return (
      <div className="App">
          <p> {props.name} </p>
          <p> {props.age} </p>
          <p> {props.email} </p>
      </div>
    );
  }
```

Repare como tranportamos as informações name, age, email pelo componente pai App para o componente filho Person. Dentro dele passamos os paramêtros props, caso tenha familiriadade com objetos em Javascript, as informações que chegam nesse props é da seguinte maneira.

```
  const props = {
    name: 'String',
    age: Number,
    email: 'String
  }
```

Podemos desestruturar as props para deixar o código mais enxuto se necessário

```
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
