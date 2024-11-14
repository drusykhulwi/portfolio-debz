import React, { useRef } from 'react'
import TestimonialData from './TestimonialData';
import Testimonial from './Testimonial';
import './Testimonials.css'

function Testimonials() {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -containerRef.current.offsetWidth,
            behavior: 'smooth'
        });
    };
    const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };
  const testimonies = TestimonialData.map((item) =>{
    return <Testimonial name={item.name} title={item.title} review={item.review}/>
  })
  return (
    <div className='Testimonials'>
        <h2>Testimonials</h2>
        <button className="scroll-button left" onClick={scrollLeft}>{"<"}</button>
        <div className="testimonials-container" ref={containerRef}>
            {testimonies}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>{">"}</button>
    </div>
  )
}

export default Testimonials