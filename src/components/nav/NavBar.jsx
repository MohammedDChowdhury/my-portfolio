import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

// import { Link } from 'react-router-dom'
// import Home from "../home/Home";
// // import NavBar from "./NavBar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "../about/About";
// import Contact from "../contact/Contact";
// import NoPage from '../NoPage';
// import { Link } from 'react-router-dom'

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  // const navStyle = {
  //   color:"black"
  // }
  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default NavBar;
