import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Currents from './components/Currents';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Reyna from './components/Reyna';
import purpleStar from './images/purple-star.jpg';
import heart from './images/heart-title.jpg';

function App() {
 

  return (
    <div className="app-container">
    <Nav />
    <Reyna />
    <About />
    <Currents />
    <Skills />
    <Contact />
  
</div>

  );
}

export default App;
