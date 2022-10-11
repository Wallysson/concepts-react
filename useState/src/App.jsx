import { useState } from "react"

export function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  function onChangeNewTask(e) {
    setNewTask(e.target.value)
  }

  function handleNewTask() {
    const task = {
      id: tasks.length + 1,
      taskName: newTask
    }
    setTasks([...tasks, task])
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