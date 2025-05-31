import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import NotFound from "./Components/Notfound";
import './App.css'

function App() {
 
  return (
    <>
      
     <Home/>
     <Projects/>
     <About/>
     <Resume/>
     <Contact/>
     
    </>
  )
}

export default App



