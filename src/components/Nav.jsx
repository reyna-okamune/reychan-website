import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';

const topnav = {
  width: '100%',
  height: '4rem',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)',
  color: '#ffe4b3', // cream color
  backgroundColor: '#ff789f', // pink color
  position: 'fixed',
  top: 0,
  zIndex: 1000,

};



export default function Nav() {
  return (
    <>
      <nav style={topnav} className="flex justify-center items-center p-10">
        <ul className="flex gap-24">
          <li><Link to="aboutMe" smooth={true} className="nav-link">Reyna Okamune</Link></li>
          <li><Link to="currents" smooth={true} className="nav-link">Projects</Link></li>
          <li><Link to="skills" smooth={true} className="nav-link">Current Favorites</Link></li>
          <li><Link to="contact" smooth={true} className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}
