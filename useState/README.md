# React Hooks

A partir da versão 16.8 do React a proposta de utilizar Hooks foi aceita e permite usar estados, ciclos de vida, entre outras funcionalidades, sem a necessidade de escrever componentes com classe.

### Motivação

Os Hooks resolvem uma grande variedade de problemas encontrados durante o desenvolvimento de componentes. Por exemplo:

* Reutilização de lógica de estado entre components;
* Wrapper Hell (HOC, Render props — React DevTools);
* Componentes complexos e difíceis de se compreender;
* Componentes contendo grandes responsabilidades;
* Confusão ao utilizar classes (this, classes).‍‍

## useState

Nos permite criar estados em um componente criado a partir de uma função. Ele cria uma variável que controla o estado do componente. Para isso passamos o valor inicial do estado e importamos useState do React.

Sintaxe:

```jsx
  import React, { useState } from "react"

  const [state, setState] = useState(0)
  // state: 'variável' que armazena o valor;
  // setState: função que altera o valor;
  // useState(): chamada do hook, e dentro dos parênteses temos o valor inicial.
```

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

### Exemplo: Fazer um ToDoList

Fazer uma lista de tarefas é como fazer um "Hello World" para quem está começando estudar React e estados. Portanto, fazer uma lista de tarefas capaz de:

* Adicionar uma nova tarefa
* Mostrar a lista de tarefa
* Deletar a tarefa selecionada

Para isso é necessário saber bem a utilização do useState e como usar o .map() para mostrar as tarefas na tela. A

<details>
  <summary>Resolução</summary>
  
```jsx
  import { useState } from "react"

  export function App() {
    const [tasks, setTasks] = useState([]) // lista das tarefas
    const [newTask, setNewTask] = useState('') // onde vai armazenar os valores da nova tarefa no input

    function onChangeNewTask(e) {
      setNewTask(e.target.value) // pega os valores do input e coloca na função setNewTask
    }

    function handleNewTask() {
      const task = {
        id: tasks.length + 1,
        taskName: newTask
      }
      // criei uma constante auxiliar para armazenar os valores de id e o nome da tarefa, porque vamos precisar para deletar o id da tarefa correta
      setTasks([...tasks, task])
      // aqui usamos o spread operator para trazer todas tarefas + a task nova criada para seguir o principio da imutabilidade do react
    }

    function deleteTask(id) {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
      <div>
        <h1>ToDoList</h1>
        <div>
          <input type="text" onChange={onChangeNewTask} />
          <button onClick={handleNewTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>{task.taskName}
                <button onClick={() => deleteTask(task.id)}>X</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
```

</details>