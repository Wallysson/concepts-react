import { useEffect, useState } from "react"
import axios from 'axios'

export function GetWithAxios() {
  const [curiosities, setCuriosities] = useState('')

  const fetchNewCuriosity = async () => {
    await axios.get('https://catfact.ninja/fact')
    .then(response => {
      setCuriosities(response.data.fact)
    })
  }

  useEffect(() => {
    fetchNewCuriosity()
  }, [])

  return (
    <div>
      <button onClick={fetchNewCuriosity}>Gerar frase</button>
      <h1>{curiosities}</h1>
    </div>
  )
}