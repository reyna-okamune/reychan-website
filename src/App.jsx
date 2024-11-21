import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Currents from './components/Currents';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';


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
