import React from 'react'
import './About.css'

function About() {
  return (
    <div className='About'>
        <div className='about-container'>
            <div className='about-image-container'>
                <div className='about-image'>
                    {/* <div className='about-image-sub'></div> */}
                </div>
            </div> 
            <div className='about-content'>
             <h2>ABOUT ME</h2>
             <p>
                I am an ambitious and motivated accountant with a Bachelor’s degree in Commerce (Accounting),
                a solid foundation in customer service, and a developing background in virtual assistance. I am
                an energetic, proactive individual who values integrity, honesty, and accountability. With experience in
                accounting, customer support, and administrative roles, I combine an eye for detail with exceptional problem-solving
                and communication skills. My dedication to delivering high-quality support extends to my volunteer work in Kenya, where I 
                empower young girls and supports local communities through medical and educational outreach programs.

             </p>   
            </div>
        </div>
    </div>
  )
}

export default About