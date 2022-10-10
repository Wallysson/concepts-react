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