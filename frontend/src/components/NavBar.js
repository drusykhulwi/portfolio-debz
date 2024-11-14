import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import './Navbar.css'
import logo from '../Images/logo.png'

function NavBar() {
  return (
    <div className='NavBar'>
        <div className='navbar-container'>
            <div className='logo-container'>
                <img src={logo} alt="Debz" className='logo'/>
            </div>
            <div className='navigation'>
                <Link to="#Heropage">Home</Link>
                <Link to="#About">About</Link>
                <Link to="#Experiences">Experiences</Link>
                <Link to="#Expertise">Expertise</Link>
                <Link to="#Certifications">Certifications</Link>
                <Link to="#Testimonials">Testimonials</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar