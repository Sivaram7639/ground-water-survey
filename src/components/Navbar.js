import React, {useState}from 'react';
import "./Navbar.css";
import{Link} from "react-router-dom";
import{FiMenu , FiX} from "react-icons/fi";
import Logo from "../assets/logo-web.png";

function Navbar() {
    const[open , setOpen]=useState(false);
    const handleClick = () => setOpen(!open);
    const closeMenu = ()=> setOpen(false);
  return (
    <nav className="navbar">
       <Link to="/" className="nav-logo">
        <img src={Logo} alt="logo" className="headerlogo"/>
        </Link> 
      <div onClick={handleClick} className="nav-icons">
        {open? <FiX/> : <FiMenu/>} </div>
       <ul className={open ? "nav-links active" :"nav-links"}>
        <li onClick={closeMenu} className="nav-button"><Link to="/Booknow" className="navlink">BOOK NOW</Link></li>
        <li  onClick={closeMenu} className="nav-item"><Link to="/About" className="nav-link">About Us </Link></li>
        <li  onClick={closeMenu} className="nav-item"><Link to="/Services" className="nav-link">Services</Link></li>
        <li  onClick={closeMenu} className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
       </ul>
       </nav>
       
  )
}

export default Navbar