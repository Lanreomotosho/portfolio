import React, { useState } from 'react';
import './social.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Social =() => {
    return (
        <section id='Social'>
        <div className='socialImgs' >
            <IconContext.Provider value={{ className: "react-icons"}}>
                <FaLinkedin  href='https://www.linkedin.com/in/lanreomotosho'  className='FaLinkedin'/>
                <FaGithub className='FaGithub'/>
                <FaXTwitter className='FaXTwitter' />
                <FaInstagramSquare  className='FaInstagramSquare'/>
                <MdOutlineEmail className='MdOutlineEmail'/>
                <FaWhatsapp  className='FaWhatsapp '/>
            </IconContext.Provider>
        </div>
      </section>
    );
}

export default Social;