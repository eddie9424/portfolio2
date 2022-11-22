import React from 'react'
import './nav.css'


    

import {RiHomeSmileFill} from 'react-icons/ri'
import {FcAbout} from 'react-icons/fc'
import {BiBook} from 'react-icons/bi'
import {TbCertificate} from 'react-icons/tb'
import {GiDiploma} from 'react-icons/gi'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import { useState } from 'react'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"   onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><RiHomeSmileFill/></a>
      <a href="#about"  onClick={()=> setActiveNav('#about')} className={activeNav=== '#experience'? 'about' : ''}><FcAbout/></a>
      <a href="#experiences"  onClick={()=> setActiveNav('#experience')} className={activeNav=== '#experience'? 'active' : ''}><BiBook/></a>
      <a href="#certificate"  onClick={()=> setActiveNav('#certificate')} className={activeNav=== '#certificate'? 'active' : ''}><TbCertificate/></a>
      <a href="#services"  onClick={()=> setActiveNav('#services')} className={activeNav=== '#services'? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      <a href="#portfolio"  onClick={()=> setActiveNav('#portfolio')} className={activeNav=== '#portfolio'? 'active' : ''}><GiSkills/></a>

      <a href="#diplomes"  onClick={()=> setActiveNav('#diplomes')} className={activeNav=== '#diplomes'? 'active' : ''}><GiDiploma/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact'? 'active' : ''}><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav