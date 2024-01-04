import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6axb0b', 'template_i5nph4j', form.current, 'uQbOY4o5E9hsSzxAL')
      .then((result) => {
          alert('Sent');
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='footer'>
        <h2>Contact</h2>
      <div className='form-container'>
        <form className='formulario' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className='button'/>
        </form>
      </div>
      
      <div className="socials">
        <a href='https://www.linkedin.com/in/franco-d-agostino-41b23b278/'><img className='img' src='https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png'/> </a>
        <a href='https://github.com/FrancoDagostin'><img className='img' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a>
      </div>
    </div>
  )
}

export default Footer