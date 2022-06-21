import React from 'react'
import CV from '../../assets/cv.pdf'
export default function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download>Download CV</a>
        <a href="#contact">Contact me</a>

    
    </div>
  )
}
