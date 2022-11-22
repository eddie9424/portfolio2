import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets//portfolio1.jpg'


const data = [
  {
    id:1,
    image:IMG1,
    title:'Implémentation d\'un projet ML sur les prix des logements avec python3, Dockers, GitHub Actions et HEROKU',
    github:'https://github.com/eddie9424/boston_house_pricing-.git',
    demo:'https://bostonhouseprice111.herokuapp.com/',

  },


  {
    id:2,
    image:IMG1,
    title:'Analyse factorielle et classification des données liées à la critique de vins',
    // github:'https://github.com',
    // demo:'https://dribble.com/Alien_pixels',

  },
  
  {
    id:3,
    image:IMG1,
    title:'Analyse des données de vaccination et mortalité de la covid 19 en France et dans l’Union européenne',
    // github:'https://github.com',
    // demo:'https://dribble.com/Alien_pixels',

  },
  
  
  
  
]




















const portfolio = () => {
  return (
    <section id='portfolio'>
      {/* <h5>
        My recent work

      </h5> */}
      <h2>Mes projets récents</h2>
      
      <div className='container portfolio__container'>
        {
          data.map(({id,image, title, github,demo})=>{
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo}className='btn btn-primaty' target='_blank'>Live Demo</a>

              </div>

              </article>
            )
          }
          )
        }

      </div>

    </section>
  )
}

export default portfolio