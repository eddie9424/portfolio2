import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
    <footer  className='footer__item'>
      <a href="#"className='footer__logo'>MOADINE</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Profil</a></li>
        <li><a href="#experiences">Compétences</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">Projets</a></li>
        <li><a href="#certificate">certificats</a></li>
        <li><a href="#diplomes">diplomes</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className='footer__socials'>
        {/*manage ure following on twitter*/}
        {/* <a href="https://twitter.com"><IoLogoTwitter/></a> */}
      </div>
      <div className="footer__copyright">
        <small>&copy; MOADINE. ALL rights reserved</small>
      </div>
    </footer>


  )
}

export default footer