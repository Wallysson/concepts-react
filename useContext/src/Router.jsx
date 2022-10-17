import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}