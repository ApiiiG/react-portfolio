import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am </h5>
        <h1>Hrvoje</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
      </div>

      <div className="me">
        <div className="me-image">
        <img src={ME} alt="" />
        </div>
       
      </div>

    
    </header>
    )
}

export default Header