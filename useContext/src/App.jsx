import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from "./contexts/AppContext";

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
      <Router />  
      </AppProvider>
    </BrowserRouter>
  )
}