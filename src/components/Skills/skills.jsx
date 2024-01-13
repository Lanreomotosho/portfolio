import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import Digitalmarketing from '../../assets/website-design.png';
import Wordpress from '../../assets/app-design.png';


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What i Do</span>
        <span className='skillDesription'>I'm a Frontend Developer proficient in HTML, CSS, Tailwind, Figma, JavaScript, React.js, TypeScript and REST API integration. <br/> I combine my technical expertise with a creative mindset to craft engaging and user-centric web experiences.  I thrive on transforming ideas into interactive and visually appealing solutions. <br /> Whether it's building responsive interfaces or collaborating with cross-functional teams, I'm dedicated to delivering seamless digital solutions that leave a lasting impact. Let's connect and explore the endless possibilities at the intersection of design and technology!</span>
        <div className='skillBars'>
            <div className='skillBar'>
              <img src={UIDesign}  alt='UIDesign'  className='skillBarImg' />
              <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p> I'm a dedicated UI/UX designer with a keen eye for detail and a passion for creating seamless, user-centric digital experiences</p>
              </div>
            </div>

            <div className='skillBar'>
              <img src={Digitalmarketing}  alt='Digitalmarketing'  className='skillBarImg' />
              <div className='skillBarText'>
                <h2>Digital Marketer</h2>
                <p>Helping businesses achieve online success through strategic digital marketing.</p>
              </div>
            </div>

            <div className='skillBar'>
              <img src={Wordpress}  alt='Wordpress'  className='skillBarImg' />
              <div className='skillBarText'>
                <h2>Wordpress Designer</h2>
                <p>I'm a passionate WordPress designer committed to delivering captivating and functional websites. With over 7 years of experience, I specialize in creating seamless user experiences through custom WordPress themes by making use of Elementor and Thrive Architech plugins.</p>
              </div>
            </div>

        </div>
    </section>
  )
}

export default Skills;