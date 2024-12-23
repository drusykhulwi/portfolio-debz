import React from 'react'
import './Heropage.css'
import { HashLink as Link } from "react-router-hash-link";

function Heropage() {
  return (
    <div className='Heropage' id='Heropage'>
        <div className='hero-container'>
            <h1>DEBORA NAMILIMO</h1>
            <h2>Virtual Assistant</h2>
            <button>
              <Link to="#Footer" className='hero-link'>Contact Me</Link>
            </button>
        </div>
    </div>
  )
}

export default Heropage