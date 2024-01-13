import React, { useRef, useState } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import  YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [message,setMessage]= useState('')
  const [error,setError]= useState('')
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('i ran')
if(name.length < 3){
  setError('Name is too short')
  return
}
if(message.length < 15){
  setError('Message is too short')
  return
}
if(!email.includes('@') || !email.includes('.com') || email.length <15 ){
  setError('Email is not valid')
  return
}
    emailjs.sendForm('service_902d7bo', 'template_omxiele', {
      from_name:name,
      from_mail:email,
      message
    }, 'fVTmNvvfw2nghed6qXntH')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  console.log(name,email,message)
  return (
   <section id="contactPage">
   <div id='clients'>
<h1 className="contactPageTitle">My Clients</h1>
<p className="clientDescription">
    I have had the opportunity to work with a diverse group of company.
    Some of the notable companies I have worked with includes
</p>
<div className="clientImgs">
    <img src={Walmart} alt='Client' className='clientImg' />
    <img src={Adobe} alt='Client' className='clientImg' />
    <img src={Microsoft} alt='Client' className='clientImg' />
    <img src={Facebook} alt='Client' className='clientImg' />
</div>
   </div>
<div id='contact'>
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className="contactDesription">Please fill out the form below to discuss any work opportunities.</span>
<form className="contactForm" ref={form} onSubmit={sendEmail}>
    <input onChange={(e)=> setName(e.target.value)} type="text" className="name" placeholder='Your Name'  name="your_name" />
    <input onChange={(e)=> setEmail(e.target.value)} type="text" className="email"  placeholder='Email Address'  name="your_email"/>
  <textarea onChange={(e)=> setMessage(e.target.value)} className='msg' name="message"  rows="5" placeholder='Your message'></textarea>
  <p></p>
  <button type='submit' value='Send' className="submitBtn" onClick={(e) => sendEmail(e)}><b>Submit</b></button>


  <div className='links'>
    <img src={FacebookIcon} alt='Facebook' className='links' />
    <img src={TwitterIcon} alt='Twitter' className='links' />
    <img src={InstagramIcon} alt='Instagram' className='links' />
    <img src={YoutubeIcon} alt='Youtube' className='links' />
  </div>
</form>
</div>

   </section>
  )
}

export default Contact