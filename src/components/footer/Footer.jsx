import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      

      <ul className="permalinks">
      <li> <a href="#">Home</a></li>
      <li> <a href="#about">About</a></li>
      <li> <a href="#portfolio">Portfolio</a></li>
      <li> <a href="#experience">Experience</a></li>
      <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/ApiGambino/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/apiii.13/"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/hrvoje-apčag-ba010a258/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made by Hrvoje Apčag.</small>
      </div>
    </footer>
  )
}

export default Footer
