import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"

export function Home() {
  const { name } = useContext(AppContext)
  return (
    <div>
      <h1>Home: { name }</h1>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/profile">Profile</Link>
    </div>
  )
}