import React from 'react'
import './header.css'

import CTA from './CTA'

import ME from '../../assets/mine.jpg'




import HeaderSocial from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hello i'm</h5> */}
        <h1>Abdellah MOADINE</h1>
        <h4 className='text-light' >
          Étudiant en Master 2 méthodes quantitatives et modélisation 
          pour l’entreprise à la recherche d'un stage de fin
          d'études d'une durée de 6 mois en Data Science ou en 
          Data Analytics à partir du mois de Janvier 2023.
          DEUG en mathématiques appliquées, 
          bilingue Anglais, Aspiring Data scientist.
        
        </h4>
       
        <CTA/>  
        <HeaderSocial/>  

        <h3>
          "Je veux aider les autres
          à prendre les bonnes décisions, des décisions basées sur les données"
        </h3>
       



      </div>
    </header>
  )
}

export default header