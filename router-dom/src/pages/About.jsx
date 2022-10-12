import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1>ABOUT</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/profile">Profile</Link>
    </div>
  )
}