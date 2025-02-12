
import "./assets/css/tailwind.css"
import "./assets/css/custom.css"
import { Route, Routes, useRoutes } from "react-router-dom"

import { Suspense, useEffect, useState } from "react"
import { routers } from "./pages/routers"

function App() {

  const element = useRoutes(routers)
  return (
    <Suspense fallback= {<div>Loading...</div>}>
      {element}  
    </Suspense>
  )
}

export default App
