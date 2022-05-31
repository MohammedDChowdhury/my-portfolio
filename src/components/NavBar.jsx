import React from 'react'
// import { Link } from 'react-router-dom'
import Home from "./Home";
// import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import NoPage from './NoPage';
import { Link } from 'react-router-dom'

const NavBar = () => {
  const navStyle = {
    color:"black"
  }
  return (
   
    <Router>
   
         
    <div>
       <nav className={navStyle}>
         <h3>Logo</h3>
         <ul>
           <Link className ="nav-links" to="/"></Link>
           <li>Home</li>
           <Link to="/about">
           <li>About</li>
           </Link>
           <Link to="/contact">
           <li>Contact</li>
           </Link>
           </ul>
           
   
        
      </nav>
    </div>

     <Routes>
     <Route exact path="/" element={Home}/>
     <Route exact path="/about" element={About}/>

     <Route exact path="/contact" element={Contact}/>
     <Route path="*" element={<NoPage />} />
      </Routes>
    
    </Router>

  )
}

export default NavBar;