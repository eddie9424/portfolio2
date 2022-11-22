import React from 'react'

import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experiences/experiences'
import Certificate from './components/certificate/cert'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'
import Dipl from './components/diplomes/Diplomes'
const App = () => {
  return (
    <>
       <Header />
       <Nav />
       <About />
       <Experience/>
       <Services/>
       <Portfolio/>
       <Certificate/>
       <Dipl/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App