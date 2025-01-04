import React from 'react'
import { useRef } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../Images/logo.png'

function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className='NavBar'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <img src={logo} alt="Debz" className='logo'/>
        </div>
        <nav className='navigation' ref={navRef}>
          <Link to="#Heropage">Home</Link>
          <Link to="#About">About</Link>
          <Link to="#Experiences">Experiences</Link>
          <Link to="#Expertise">Expertise</Link>
          <Link to="#Certifications">Certifications</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
      </div>
    </header>
  )
}

export default NavBar