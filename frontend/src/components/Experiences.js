import React, { useRef } from 'react'
import Experience from './Experience'
import ExperienceData from './ExperienceData'
import './Experiences.css'

function Experiences() {
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
  const participations = ExperienceData.map((item) =>{
    return <Experience heading={item.heading} location={item.location} description={item.description}/>
  }) 
  return (
    <div className='Experiences'>
      <h2>My Experiences</h2>  
      <button className="scroll-button left" onClick={scrollLeft}>{"<"}</button>
        <div className="experiences-container" ref={containerRef}>
          {participations}
        </div>
      <button className="scroll-button right" onClick={scrollRight}>{">"}</button>
    </div>
  )
}

export default Experiences