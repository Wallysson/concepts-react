import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/profile">Profile</Link>
    </div>
  )
}