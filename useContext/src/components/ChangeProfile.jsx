import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"

export function ChangeProfile() {
  const [ newName, setNewName ] = useState("")
  const { setName } = useContext(AppContext)
  return (
    <div>
      <input 
        type="text" 
        placeholder="Troque seu nome"
        onChange={(event) => setNewName(event.target.value)}
      />
      <button 
        onClick={() => setName(newName)}
      >
        Change Name
      </button>
    </div>
  )
}