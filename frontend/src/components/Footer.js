import React from 'react'
import logo from '../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import { HashLink as Link } from "react-router-hash-link";


function Footer() {
  return (
    <div className='Footer' id='Footer'>
        <div className='footer-container'>
            <div className='description'>
                <img src={logo} alt="Debz" className='logo'/>
                <h2>Debora Namilimo</h2>
            </div>
            <div className='quicklinks'>
                <h3>Quick Links</h3>
                <div className='links'>
                    <Link to="#Heropage">Home</Link>
                    <Link to="#About">About</Link>
                    <Link to="#Experiences">Experiences</Link>
                    <Link to="#Expertise">Expertise</Link>
                    <Link to="#Certifications">Certifications</Link>
                    <Link to="#Testimonials">Testimonials</Link>
                </div>
            </div>
            <div className='contacts'>
                <h3>Contacts</h3>
                <div className='details'>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope}  className="icons"/>
                        <a href="mailto:debrahlymo15@gmail.com">
                            debrahlymo15@gmail.com
                        </a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone}   className="icons"/>
                        <a href="tel:+254718955122">
                            +254718955122
                        </a>
                    </p>
                    <a href="https://www.linkedin.com/in/deboranamilimo" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" />
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer