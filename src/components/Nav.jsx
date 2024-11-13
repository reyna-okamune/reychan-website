import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';

const topnav = {
  width: '100%',
  height: '4rem',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: 'clamp(0.6rem, 1.2vw, 1.25rem)',
  color: '#ffeef3', // light pink color
  backgroundColor: '#789fff', // purple color
  position: 'fixed',
  top: 0,
  zIndex: 1000,

};



export default function Nav() {
  return (
    <>
      <nav style={topnav} className="flex justify-center items-center p-10">
        <ul className="flex gap-6 md:gap-24 text-center">
          <li><Link to="aboutMe" smooth={true} className="nav-link">Reyna Okamune</Link></li>
          <li><Link to="currents" smooth={true} className="nav-link">Favorites</Link></li>
          <li><Link to="projects" smooth={true} className="nav-link">Projects</Link></li>
          <li><Link to="contact" smooth={true} className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}
