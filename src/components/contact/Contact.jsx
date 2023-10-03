import React from 'react'
import './Contact.css'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ufph9j', 'template_3urdusn', form.current, 'ztwRd_Dcub5i7dGNV')
    e.target.reset()
     
  
  };

  return (
    <section id='contact'>
      <h5>Let's get in touch! </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Write your name here..' required/>
          <input type="email" name="email" placeholder='Let me know how to contact you back..' required />
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type='submit' className='submit btn btn-primary'>Send Message</button>
        </form>
        
      </div>

     
    </section>
  )
}

export default Contact