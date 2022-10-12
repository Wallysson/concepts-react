import axios from "axios"
import { useState } from "react"

export function Excuser() {
  const [excuser, setExcuser] = useState("")
   const fetchExcuser = async (category) => {
    await axios.get(`https://excuser.herokuapp.com/v1/excuse/${category}/`)
    .then(response => {
      setExcuser(response.data[0].excuse)
    })
  }

  return (
    <div>
      <h1>Excuser</h1>
      <button onClick={() => fetchExcuser('family')}>Family</button>
      <button onClick={() => fetchExcuser('office')}>Office</button>
      <button onClick={() => fetchExcuser('children')}>Children</button>
      <button onClick={() => fetchExcuser('college')}>College</button>
      <button onClick={() => fetchExcuser('party')}>Party</button>
      <h2>{excuser}</h2>
    </div>
  )
}