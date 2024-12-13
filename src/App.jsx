import Box from "./components/Box"
import "./assets/css/tailwind.css"
import { ToDoList } from "./components/ToDoList"
import ContactPage from "./pages/contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RegisterPage from "./pages/register"

function App() {

  return (
    <>
      <Header />
      {/* <ContactPage /> */}
      <RegisterPage />
      <Footer />
    </>
  )
}

export default App
