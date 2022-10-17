import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"

export function About () {
  const { name } = useContext(AppContext)
  return (
    <div>
      <h1>About: { name }</h1>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/profile">Profile</Link>
    </div>
    )
}