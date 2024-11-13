import React from 'react'
import Heropage from '../components/Heropage'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'

function Home() {
  return (
    <div className='Home'>
        <div>
            <Heropage/>
            <About/>
            <Expertise/>
            <Experiences/>
            <Skills/>
        </div>
    </div>
  )
}

export default Home