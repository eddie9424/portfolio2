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
          <p>
          Salut ! Je m'appelle Abdellah et je suis étudiant à l’université de Lille. Je suis très passionné par les technologies en constante évolution, notamment dans la DATA science et business intelligence.
          Je crois que les compétences sont la capacité à bien effectuer certaines tâches.
           Certaines compétences peuvent être mesurées et nous les acquérons par un effort délibéré,
            d'autres sont liées à nos traits de personnalité. Mes compétences techniques sont les
             compétences que j'ai acquises grâce à un effort délibéré. Ils peuvent être appris, 
             enseignés et mesurés, Cela incluent Python, SQL, Microsoft Power BI. Mes compétences non techniques,
              en revanche incluent , la communication et les relations interpersonnelles, la résolution de problèmes,
               la négociation, le multitâche, la gestion du temps, la présentation et autres.
              

          </p>
          <p>
          Pendant mon temps libre, j'aime regarder la décomposition des plans vfx et tout ce qui concerne les technologies vfx dans le monde. Je me réjouis particulièrement et m'inspire en regardant des individus 
               talentueux améliorer leur art au moyen de la technologie tout en étant limités par le temps et les budgets.

          </p>
          {/* <a href="#contact" className='btn btn-primary'></a> */}


         </div>

      </div>
    </section>
  )
}

export default about