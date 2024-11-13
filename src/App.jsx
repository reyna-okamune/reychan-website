import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Currents from './components/Currents';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
 

  return (
    <div className="app-container">
    <Nav />
    <About />
    <Currents />
    <Projects />
  
</div>

  );
}

export default App;
