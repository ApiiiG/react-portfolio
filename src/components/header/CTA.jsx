import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>DOWNLOAD CV</a>
        <a href="https://github.com/ApiiiG" className='btn btn-primary'>GitHub</a>
    </div> 
    )
}

export default CTA