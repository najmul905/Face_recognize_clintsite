import { Outlet } from "react-router-dom"
import Navbar from "./assets/Component/NavBar/Navbar"


function App() {

  return (
    <>
    <div className="">
    <Navbar></Navbar>
   <Outlet></Outlet>
    </div>
   
    </>
  )
}

export default App
