import React from 'react'
import './intro.css';
import bg from '../../assets/lanre.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';



const Intro = () => {
  return (
 <section id="intro">
    <div className="introContent">
<span className="hello">Hello,</span>
<span className="intoText">I'm <span className="introName"><b>Lanre Omotosho</b></span> <br />Certified Meta Front-End Developer  </span>
<p className="introPara"> <b>I am a skilled Front-End web developer! Transforming Ideas into Engaging Web Solutions <br />Cross-functional Collaboration| Pixel-Perfect UI/UX Design Expert".</b> </p> 
<Link><button className="btn"><img src={btnImg} alt="Hire Me"  className='btnImg'/>Hire Me</button></Link>
   </div>
   <img src={bg} alt="Profile" className='bg' />
 </section>
  );
}

export default Intro;