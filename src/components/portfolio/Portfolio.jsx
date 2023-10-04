import React from 'react'
import './Portfolio.css'
import IMG1 from  '../../assets/portfolio1.png'
import IMG2 from  '../../assets/portfolio2.png'
import IMG3 from  '../../assets/portfolio3.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My best work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG1} alt="" />
        <h3>Keeper +</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/ApiiiG/FinalProject" className='btn'>Source code</a>
        <a href="https://vercel.com/" className='btn btn-primary'>Live Demo</a>
        </div>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG2} alt="" />
        <h3>BMI Calculator</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/ApiiiG/wp/tree/master/6_DZ" className='btn'>Source code</a>
        <a href="https://vercel.com/" className='btn btn-primary'>Live Demo</a>
        </div>
      </div>
      </article>
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG3} alt="" />
        <h3>WeatherApp</h3>
        <div className="portfolio__item-cta">
        <a href="github.com" className='btn'>Source code</a>
        <a href="https://vercel.com/" className='btn btn-primary'>Live Demo</a>
        </div>
      </div>
      </article>
    </div>
    </section>
  )
}

export default Portfolio