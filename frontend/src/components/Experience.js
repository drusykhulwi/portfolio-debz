import React from 'react'
import './Experience.css'

function Experience(props) {
  return (
    <div className='Experience'>
        <div className='experience-container'>
            <div className='cards'>
                <h3>{props.heading}</h3>
                <h5><i>{props.location}</i></h5>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Experience