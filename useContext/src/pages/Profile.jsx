import { useContext } from "react"
import { Link } from "react-router-dom"
import { ChangeProfile } from "../components/ChangeProfile"
import { AppContext } from "../contexts/AppContext"

export function Profile() {
  const { name } = useContext(AppContext)
  return (
    <div>
      <h1>Profile: { name }</h1>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
      <br/>
      <ChangeProfile />
    </div>
    )
}