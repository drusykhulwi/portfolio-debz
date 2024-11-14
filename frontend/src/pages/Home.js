import React from 'react'
import Heropage from '../components/Heropage'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


function Home() {
  return (
    <div className='Home'>
        <div>
          <NavBar/>
          <Heropage/>
          <About/>
          <Expertise/>
          <Skills/>
          <Experiences/>
          <Certifications/>
          <Testimonials/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home