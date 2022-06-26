import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'



// import { Link } from 'react-router-dom'
// import Home from "../home/Home";
// // import NavBar from "./NavBar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "../about/About";
// import Contact from "../contact/Contact";
// import NoPage from '../NoPage';
// import { Link } from 'react-router-dom'

const NavBar = () => {
  // const navStyle = {
  //   color:"black"
  // }
  return (
   <nav> 
    <a href="/active"><AiOutlineHome/></a>
    <a href="#about"><AiOutlineUser/></a>
    <a href="#projects"><BiBook/></a>
    <a href="#contact"><BiMessageSquareDetail/></a>



    </nav>


  )
}

export default NavBar;