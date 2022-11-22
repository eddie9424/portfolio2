import React from 'react'
import './cert.css'
import IMG1 from '../../assets/udemy.png'
// import {SiUdemy} from 'react-icons/si'


const data = [
  {
    id:1,
    image: IMG1,
    title:'Complete Linear Regression Analysis in Python',
    certificat:'https://www.udemy.com/certificate/UC-a8420d13-b19d-456b-9cb4-409b393191e8/',
    

  },
  
  {
    id:2,
    image:IMG1,
    title:'Git, GitHub & Markdown Crash Course: Learn Git, GitHub & MD',
    certificat:'https://https://www.udemy.com/certificate/UC-fa1fc8f3-21e2-4133-88ed-ccbb2c837d94/.com',
    

  },
  
  {
    id:3,
    image:IMG1,
    title:' Artificial Neural Networks (ANN) with Keras in Python and R',
    certificat:'https://www.udemy.com/certificate/UC-341d206b-2197-47cf-943b-533c13de914b/',

  },
  
  {
    id:4,
    image:IMG1,
    title:'Master all the MS Excel Macros and the basics of Excel VBA',
    certificat:'https://www.udemy.com/certificate/UC-508fe3ab-152d-4e15-8a6f-1b554a223976/',

  },
  {
    id:5,
    image:IMG1,
    title:'PostgreSQL Databases & Python',
    certificat:'https://www.udemy.com/certificate/UC-a38f3db1-6385-457f-aced-c8b8cfe77b20/',


  },
  {
    id:6,
    image:IMG1,
    title:'Python Programming Complete Beginners Course Bootcamp 2022',
    certificat:'https://www.udemy.com/certificate/UC-42ff707f-9e55-4b84-9662-1248dc8d73ad/',
    

  },
  {
    id:7,
    image:IMG1,
    title:' The SQL Programming Essentials 2022 Immersive Training',
    certificat:'https://www.udemy.com/certificate/UC-323f2824-7b68-452e-82fc-d3b576ae1e06/',
    

  },

  

]


const certificate = () => {
  return (
    <section id='certificat'>
      {/* <h5>
        My recent work

      </h5> */}
      <h2>certificats</h2>
      
      <div className='container certificat__container'>
        {
          data.map(({id,image, title, certificat})=>{
            return (
              <article key={id} className='certificat__item'>
              <div className="certificat__item-image">
                
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="certificat__item-cta">
                <a href={certificat} className='btn' target='_blank'>certificat</a>
                {/* <a href={demo}className='btn btn-primaty' target='_blank'>Live Demo</a> */}

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

export default certificate