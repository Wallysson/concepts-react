import { Link } from "react-router-dom";

export function Profile() {
  return (
    <div>
      <h1>PROFILE</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  )
}