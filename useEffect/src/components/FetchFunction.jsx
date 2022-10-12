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