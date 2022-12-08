import React from 'react'
import './about.css'


import ME from '../../assets/mine2.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {RiFolderUserLine} from 'react-icons/ri'

const about = () => {
  return (
    <section id='about'>
      <h5></h5>
      <h2>Profil</h2>
      <div className='container about__container'> 
        <div className='about__me'>
          <div className='.about__me-image'><img src={ME} alt="About Image" /></div> 
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            {/* <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years working experience</small>

            </article> */}
            {/*<article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ clients</small>

             </article>*/}
            {/* <article className='about__card'>
              <RiFolderUserLine className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ compiled</small>

            </article> */}
          </div>
          {/* <p>
            Je suis un étudiant en Master 2 Méthodes quantitatives et modélisation pour l’entreprise.
          </p> */}
          <p>


            Passionné par BIG DATA et attiré par la valeur qu'elles peuvent apportées, je cherche un stage de fin d’études.

            J’ai une forte appétence pour la BIG DATA, Une très bonnes capacités d'analyses de données, et possédant de très bonnes compétences en Business Intelligence, Buisness Analysis, Data modeling, ETL/OLAP/OLTP, algorithmes ML et mathématiques.
            Je crois que l'apprentissage par la pratique est la meilleure méthodologie d'apprentissage, associée à la collaboration et au travail d'équipe. C'est pourquoi Je suis toujours intrigué et à l'affût de nouvelles technologies, et de nouveaux articles de recherche dans les domaines susmentionnés pour relever un nouveau défi.



                          
              

          </p>
          <p>
            
            N'hésitez pas à me contacter, je suis prêt à relever de nouveaux défis et challenges.
                          
              

          </p>
          {/* <p>
          Pendant mon temps libre, j'aime regarder la décomposition des plans vfx et tout ce qui concerne les technologies vfx dans le monde. Je me réjouis particulièrement et m'inspire en regardant des individus 
               talentueux améliorer leur art au moyen de la technologie tout en étant limités par le temps et les budgets.

          </p> */}
          {/* <a href="#contact" className='btn btn-primary'></a> */}


         </div>

      </div>
    </section>
  )
}

export default about