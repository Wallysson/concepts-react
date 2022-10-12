import { useState } from "react"
import axios from 'axios'

export function PredictedAge() {
  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState({})
  
  const fetchPredictedAge = async () => {
    await axios.get(`https://api.agify.io/?name=${name}`)
    .then(response => {
      setPredictedAge(response.data)
    })
  }
 
  return (
    <div> 
      <h1>Digite seu nome para prever seu nome</h1>
      <input type="text" placeholder='nome:' onChange={() => setName(event.target.value)}/>
      <button onClick={fetchPredictedAge}>Predicted Age</button>
      <h3>Nome: {predictedAge?.name}</h3>
      <h3>Idade: {predictedAge?.age}</h3>
    </div>
  )
}