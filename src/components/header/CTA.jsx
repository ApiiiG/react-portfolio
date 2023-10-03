import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>DOWNLOAD CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div> 
    )
}

export default CTA