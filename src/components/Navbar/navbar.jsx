import React, { useState } from 'react';
import './navbar.css';
import logo from  '../../assets/logo.png';
import contactImg from '../../assets/Mail.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>

        <button className="desktopMenuBtn" onClick={() => {
document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me </button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}><b>Home</b></Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}><b>About</b></Link>
        <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}><b>Portfolio</b></Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}><b>Client</b></Link>
        <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}><b>Contact</b></Link>
        </div>
    </nav>
  );
};

export default Navbar;