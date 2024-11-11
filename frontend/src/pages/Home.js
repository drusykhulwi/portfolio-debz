import React from 'react'
import Heropage from '../components/Heropage'
import About from '../components/About'

function Home() {
  return (
    <div className='Home'>
        <div>
            <Heropage/>
            <About/>
        </div>
    </div>
  )
}

export default Home