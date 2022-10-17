import { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppProvider ({children}) {
  const [name, setName] = useState("Wallysson")
  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  )
}