import React from 'react'
import './contact.css' 
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef as UseRef} from 'react';
import emailjs from 'emailjs-com'


const contact = () => {
  const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rfl7d7e', 'template_widc6rd', form.current, 'xa2uUhIJSQ39j3EiM')
    e.target.reset()
   };
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option"> 
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>
              Email
            </h4>
            <h5>abdellah.moadine.1618@gmail.com</h5>
            <a href="mailto:abdellah.moadine.1618@gmail.com">Cliquez içi</a>
            

          </article>
          <article className="contact__option"> 
            <BsWhatsapp className='contact__option-icon'/>
            <h4>
              WhatsApp
            </h4>
            <h5>+33(0)6-18-54-40-82</h5>
            <a href="https://api.whatsapp.com/send?phone=33618544082" target="_blank">Cliquez içi</a>
            

          </article>



        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' requiered/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer le message</button>

        </form>
      </div>
    </section>
  )
}

export default contact