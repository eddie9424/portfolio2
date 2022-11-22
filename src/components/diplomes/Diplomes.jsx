import React from 'react'
import './Diplomes.css'
import {FcDiploma1} from 'react-icons/fc'
const diplomes = () => {
  return (
    <section id='diplomes'>
      <h2>
        Diplômes
      </h2>
      <div className='container diplomes__container'>
      <div className='diplomes__frontend'>
          <div className="diplomes__content">
            <article className='diplomes__details'>
              {/* <FcDiploma1 className='diplomes__details-icons'/> */}
              <div >
                <h2>Méthodes quantitatives et modélisation pour l'entreprise </h2>
                <large className='text-light'>Master 1</large>
                <h5 className='text-light'>Université de Lille</h5>
              </div>

              <div >
                <h2>Mathématiques informatiques appliquées aux sciences humaines et sociales</h2>
                <large className='text-light'>Master 1 (obtenu)</large>
                <h5 className='text-light'>Université de Lille</h5>
              </div>
              <div >
                <h3>Mathématiques informatiques appliquées aux sciences humaines et sociales</h3>
                <large className='text-light'>Licence L3</large>
                <h5 className='text-light'>Université de Lille</h5>
              </div>
              <div >
                <h3>Mathématiques appliquées</h3>
                <large className='text-light'>DEUG</large>
                <h5 className='text-light'>Université de Oujda</h5>
              </div>
            </article>
            
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default diplomes