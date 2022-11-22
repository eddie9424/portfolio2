import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://twitter.com" target="_blank"><FiTwitter/></a>
      <a href="https://github.com" target="_blank"><BsGithub /></a>

        
      <a href="https://linkedin.com" target="_blank"><AiOutlineLinkedin/></a>
    </div>
  )
}

export default HeaderSocials