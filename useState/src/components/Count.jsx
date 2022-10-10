import { useState } from "react"

export function Count() {
  const [count, setCount] = useState(0)

  function handleIncreaseCount() {
    setCount(state => state + 1)
  }

  function handleDecreaseCount() {
    setCount(state => state - 1)
  }

  function handeSetToZero() {
    setCount(0)
  }

  return (
    <div>
      <h1>Count</h1>
      <div style={{display: 'flex', gap: 8}}>
        <button onClick={handleIncreaseCount}>Increase</button>
        <button onClick={handleDecreaseCount}>Decrease</button>
        <button onClick={handeSetToZero}>Set To 0</button>
      </div>
      <h3 style={{color: count >= 0 ? 'green' : 'red'}}>{count}</h3>
    </div>
  )
}