import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='Skills'>
        <h2>My skills</h2>
        <div className='skills-container'>
            <div className='tech-skills'>
                <div className='tech-skills-container'>
                    <h4>Technical Skills</h4>
                    <ul>
                        <li>Accounting</li>
                        <li>Bookkeeping</li>
                        <li>Financial reporting</li>
                        <li>Reconciliation</li>
                        <li>Cash handling</li>
                        <li>Data entry</li>
                        <li>Order tracking</li>
                        <li>Inventory management</li>
                        <li>social media management</li>
                    </ul>
                </div>
            </div>
            <div className='soft-skills'>
                <div className='soft-skills-container'>
                    <h4>Soft Skills</h4>
                    <ol>
                        <li>Communication</li>
                        <li>Problem-solving</li>
                        <li>Time management</li>
                        <li>Project coordination</li>
                        <li>Adaptability</li>
                        <li>Resourcefulness</li>
                        <li>Reliability</li>
                    </ol>
                </div>
            </div>
            <div className='software-proficiency'>
                <h4>Software Proficiency</h4>
                <div className='software-image'></div>
            </div>
        </div>
    </div>
  )
}

export default Skills