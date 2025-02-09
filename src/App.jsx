
import "./assets/css/tailwind.css"
import "./assets/css/custom.css"
import { Route, Routes, useRoutes } from "react-router-dom"

import { useEffect, useState } from "react"
import { routers } from "./pages/routers"

function App() {

  const element = useRoutes(routers)
  return (
    <>
      {element}      
    </>
  )
}

export default App
