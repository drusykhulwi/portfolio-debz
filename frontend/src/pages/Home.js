import React from 'react'
import Heropage from '../components/Heropage'
import About from '../components/About'
import Expertise from '../components/Expertise'

function Home() {
  return (
    <div className='Home'>
        <div>
            <Heropage/>
            <About/>
            <Expertise/>
        </div>
    </div>
  )
}

export default Home