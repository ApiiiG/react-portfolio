import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/hrvoje-ap%C4%8Dag-ba010a258/" target="">< BsLinkedin/></a>
      <a href="https://github.com/ApiiiG" target=""><AiFillGithub/></a>
      <a href="https://www.instagram.com/apiii.13/" target=""><AiFillInstagram/></a>
      </div>
  )
}

export default HeaderSocial