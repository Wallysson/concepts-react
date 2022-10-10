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