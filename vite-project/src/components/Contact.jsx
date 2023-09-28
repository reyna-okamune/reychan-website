// src/components/Contact.js

import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import phoneIcon from '../images/phone-icon.jpg';


export default function Contact() {
    return (
        <div id="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '60px' }}>
      <img src={phoneIcon} alt="Phone Icon" style={{ 
          width: '45px', 
          height: 'auto',
          animation: 'ringingFlipped 0.5s infinite',
          animationTimingFunction: 'cubic-bezier(0.28, 0.84, 0.42, 1)'
      }} />
      
      <h1 style={{
          fontFamily: 'Protomo, sans-serif',
          fontSize: '40px',
          color: 'white',
          paddingLeft: '27px',
          paddingRight: '27px',
          textShadow: `
          3px 3px 3px rgba(255,33,156,0.9), 
          -3px -3px 3px rgba(255,33,156,0.9), 
          3px -3px 3px rgba(255,33,156,0.9), 
          -3px 3px 3px rgba(255,33,156,0.9)
          `,
          textAlign: 'center',
      }}>
          CONTACT
      </h1>

      <img src={phoneIcon} alt="Phone Icon" style={{ 
          width: '45px', 
          height: 'auto',
          animation: 'ringing 0.5s infinite',
          animationTimingFunction: 'cubic-bezier(0.28, 0.84, 0.42, 1)'
      }} />
      
  </div>

        <div style={{ textAlign: 'left' }}>
          
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
            <a href="https://www.linkedin.com/in/reyna-aguirre-okamune/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" 
              style={{ color: 'white',
               textShadow:  `
               2px 2px 2px rgba(255,33,156,0.7), 
               -2px -2px 2px rgba(255,33,156,0.7), 
               2px -2px 2px rgba(255,33,156,0.7), 
               -2px 2px 2px rgba(255,33,156,0.7)
             `,
              }}></i>
              <span style={{ marginLeft: '10px', fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '11px', 
              textShadow:  `
              2px 2px 2px rgba(190, 78, 255, 0.8), 
        -2px -2px 2px rgba(190, 78, 255, 0.8), 
        2px -2px 2px rgba(190, 78, 255, 0.8), 
        -2px 2px 2px rgba(190, 78, 255, 0.8)
            `,
              }}>&nbsp; @reyna-aguirre-okamune</span>
            </a>
          </div>


          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
            <a href="https://github.com/reyna-okamune" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ color: 'white', 
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
            `,
              }}></i>
              <span style={{ marginLeft: '10px', fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '11px', 
              textShadow:  `
              2px 2px 2px rgba(190, 78, 255, 0.8), 
              -2px -2px 2px rgba(190, 78, 255, 0.8), 
              2px -2px 2px rgba(190, 78, 255, 0.8), 
              -2px 2px 2px rgba(190, 78, 255, 0.8)
            `,
            }}>&nbsp; @reyna-okamune</span>
            </a>
          </div>


          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
            <a href="https://discord.com/users/rey-chan" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord" style={{ color: 'white', 
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
            `,
            }}></i>
              <span style={{ marginLeft: '10px', fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '11px', 
              textShadow:  `
              2px 2px 2px rgba(190, 78, 255, 0.8), 
        -2px -2px 2px rgba(190, 78, 255, 0.8), 
        2px -2px 2px rgba(190, 78, 255, 0.8), 
        -2px 2px 2px rgba(190, 78, 255, 0.8)
            `,
            }}>&nbsp;@rey-chan</span>
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
            <a href="https://www.instagram.com/reynaaguirre/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-1.0x" style={{ color: 'white', 
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
            `,
            }}></i>
              <span style={{ marginLeft: '10px', fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '11px', 
              textShadow:  `
              2px 2px 2px rgba(190, 78, 255, 0.8), 
        -2px -2px 2px rgba(190, 78, 255, 0.8), 
        2px -2px 2px rgba(190, 78, 255, 0.8), 
        -2px 2px 2px rgba(190, 78, 255, 0.8)
            `,
            }}>&nbsp; @reynaaguirre</span>
            </a>
          </div>
        
        
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
            <a href="mailto:reynaoaguirre@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope" style={{ color: 'white', 
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
            `,
            }}></i>
              <span style={{ marginLeft: '10px', fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '11px', 
              textShadow:  `
              2px 2px 2px rgba(190, 78, 255, 0.8), 
        -2px -2px 2px rgba(190, 78, 255, 0.8), 
        2px -2px 2px rgba(190, 78, 255, 0.8), 
        -2px 2px 2px rgba(190, 78, 255, 0.8)
            `,
            }}>&nbsp; reynaoaguirre@gmail.com</span>
            </a>
          </div>


        </div>

      </div>
  );
}