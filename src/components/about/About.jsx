import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GoProjectRoadmap} from 'react-icons/go'
const About = () => {
  return (
    <section id='about'>

      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Expierience</h5>
              <small>Still Junior :(</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Be the first one :)</small>
            </article>

            <article className='about__card'>
              <GoProjectRoadmap className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ small projects done so far</small>
            </article>
          </div>
          <p> I am driven to become a full-stack developer by my unwavering passion for technology,
              a burning curiosity to master both front-end and back-end development,
              and an insatiable desire to create innovative solutions.
              his drive fuels my journey towards becoming a versatile and impactful developer.</p>
            <a href="#contact" className='btn btn-primary'> Contact me  </a>
        </div>
      </div>
    
    </section>
  )
}

export default About