import React from 'react'
import './Testimonial.css'

function Testimonial(props) {
  return (
    <div className='Testimonial'>
        <div className='Testimonial-container'>
            <div className='card'>
                <h2>{props.name}</h2>
                <h3>{props.title}</h3>
                <div className='desc'>
                    <p>{props.review}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial