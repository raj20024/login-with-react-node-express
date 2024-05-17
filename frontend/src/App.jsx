import { Route, Routes } from "react-router-dom"
import Home from "./Component/Home"
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Signup from "./Component/Signup"

function App() {
  

  return (
    <>
   <Navbar/>
    <Routes>
    
    <Route  path="/" element={<Home/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/contact" element={<Contact/>} />
    <Route  path="/signup" element={<Signup/>} />

    </Routes>
    
  

    </>
  )
}

export default App
