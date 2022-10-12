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