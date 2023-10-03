import React from 'react'
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const App = () => {
  return (
   <>
   <Header/>
   <About/>
   <Portfolio/>
   <Experience/>
   <Contact/>
   <Footer/>
   
   </>
  )
}

export default App