
import "./assets/css/tailwind.css"
import "./assets/css/custom.css"
import { Route, Routes, useRoutes } from "react-router-dom"

import { useEffect, useState } from "react"
import { routers } from "./pages/routers"

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'))
    } catch {
      return null
    }
  })
  const login = () => {
    setUser({
      name: "Truong Dang Nghia",
      avatar: "/img/avt.png"
    })
  }
  const logout = () => {
    setUser()
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const element = useRoutes(routers(user, login, logout))
  return (
    <>
      {element}      
    </>
  )
}

export default App
