import React from 'react'
import './services.css'
import {MdDoneAll} from 'react-icons/md'
// import {SiNintendonetwork} from 'react-icons/si'
import {FiCheck} from 'react-icons/fi'


const services = () => {
  return (
    <section id='services'>
        <h5></h5>
        <h2>Services</h2>
        <div className='container services__container'>
        <article className='service'>
                <div className='service__head'>
                    <h3>
                        Data Analysis
                    </h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <FiCheck className='service__list-icon' />
                        <p>
                            Développer et gérer des solutions 
                        </p>
                    </li>
                    <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            Fournir des rapports avec différentes technologies selon le besoin de l'entreprise
                        </p>
                        

                    </li>
                    <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            Collaborer avec les membres de l'équipe dans le but de collecter des données et d'exécuter la mission de l'entreprise

                        </p>
                        
                    </li>
                    
                    
                </ul>

            </article>
           
            {/*--------------------*/}
            <article className='service'>
                <div className='service__head'>
                    <h3>
                        Machine Learning & Deep Learning

                    </h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <MdDoneAll className='service__list-icon'/>
                        <p>
                            Implémenter des algorithmes de ML et DL en fonction des besoins de l'entreprise.
                        </p>


                    </li>
                     {/*<li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. V
                        </p>
                        

                    </li>
                    <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                        

                    </li>
                    <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        

                    </li>
                    <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing el
                        </p>
                        

                    </li> */}
                </ul>

            </article>
            <article className='service'>
                <div className='service__head'>
                    <h3>
                        MLOps
                    </h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <MdDoneAll className='service__list-icon'/>
                        <p>
                            Dans un environnement agile, créer un système ML/DL intégré et le faire fonctionner en production de manière continue.
                        </p>


                    </li>
                    {/* <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                        </p>
                        

                    </li>
                    <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            orchestrating the movement of machine learning models, data and outcomes between data
                            science platforms and analytical engines to scale production reliably and efficiently.
                        </p>
                        

                    </li>
                    <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit..
                        </p>
                        

                    </li>
                    <li>
                        <FiCheck className='service__list-icon'/>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        

                    </li> */}
                </ul>

            </article>
            {/* */}

        </div>

    </section>
  )
}

export default services