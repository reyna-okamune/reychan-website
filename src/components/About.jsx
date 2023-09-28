// src About.jsx
import React from 'react';
import powerpuffMe from '../images/powerpuff-me-2.jpg';
import photoFrame from '../images/photo-booth.jpg';
import heartIcon from '../images/heart-icon.jpg';
import 'font-awesome/css/font-awesome.min.css';


export default function About() {
  return (
    <div id="aboutMe" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', paddingLeft: '10%', paddingRight: '10%'  }}>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '75px' }}>
        <img src={powerpuffMe} alt="me" style={{ 
          width: '55px', 
          height: 'auto',
          animation: 'bounce 2s infinite',
          animationTimingFunction: 'cubic-bezier(0.28, 0.84, 0.42, 1)'
        }} />
        <h1
          style={{
            fontFamily: 'Protomo, sans-serif',
            fontSize: '40px',
            color: 'white',
            textShadow:  `
            3px 3px 3px rgba(255,33,156,0.9), 
            -3px -3px 3px rgba(255,33,156,0.9), 
            3px -3px 3px rgba(255,33,156,0.9), 
            -3px 3px 3px rgba(255,33,156,0.9)
          `,
            textAlign: 'center',
            paddingLeft: '30px',
            paddingRight: '30px'
          }}
        >
          ABOUT ME
        </h1>
        
      </div>

      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={photoFrame} alt="Description" style={{ width: '450px', height: 'auto', }} />
        <div style={{ paddingLeft: '40px',}}>
          <p style={{
            fontFamily: 'Crystal, sans-serif',
            fontSize: '12px',
            color: 'white',
            
            
          }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={heartIcon} alt="Heart Icon" style={{ width: '25px', height: '20px',  animation: 'pulse 1s infinite' }} />
            <span style={{ 
              fontFamily: 'dogica, sans-serif' ,
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
            `,
            paddingLeft: '15px',
            paddingRight: '15px'
            }}>LOCATION:  </span> 
            <span style={{ 
              fontFamily: 'dogica, sans-serif',
              textShadow:  `
              2px 2px 2px rgba(0, 181, 195, 0.7), 
              -2px -2px 2px rgba(0, 181, 195, 0.7), 
              2px -2px 2px rgba(0, 181, 195, 0.7), 
              -2px 2px 2px rgba(0, 181, 195, 0.7)
            `,
            
            fontSize: '10px',
            }}>los angeles, california </span><br />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
          <img src={heartIcon} alt="Heart Icon" style={{ width: '25px', height: '20px',  animation: 'pulse 1s infinite' }} />
            <span style={{ 
              fontFamily: 'dogica, sans-serif',
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
             `,
             paddingLeft: '15px',
             paddingRight: '15px'
            }}>UNIVERSITY:  </span> 
            <span style={{ 
            fontFamily: 'dogica, sans-serif',
            textShadow:  `
            2px 2px 2px rgba(0, 181, 195, 0.7), 
            -2px -2px 2px rgba(0, 181, 195, 0.7), 
            2px -2px 2px rgba(0, 181, 195, 0.7), 
            -2px 2px 2px rgba(0, 181, 195, 0.7)
          `,
          fontSize: '10px',
            }}>california state unviersity, long beach </span><br />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={heartIcon} alt="Heart Icon" style={{ width: '25px', height: '20px',  animation: 'pulse 1s infinite'}} />
            <span style={{ 
              fontFamily: 'dogica, sans-serif',
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
              `, 
              paddingLeft: '15px',
              paddingRight: '15px'
            }}>DEGREE:  </span> 
            <span style={{ 
               fontFamily: 'dogica, sans-serif',
               textShadow:  `
               2px 2px 2px rgba(0, 181, 195, 0.7), 
               -2px -2px 2px rgba(0, 181, 195, 0.7), 
               2px -2px 2px rgba(0, 181, 195, 0.7), 
               -2px 2px 2px rgba(0, 181, 195, 0.7)
              `,
             fontSize: '10px',
            }}>b.s. in computer science </span><br />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={heartIcon} alt="Heart Icon" style={{ width: '25px', height: '20px',  animation: 'pulse 1s infinite' }} />
            <span style={{ 
              fontFamily: 'dogica, sans-serif',
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
              `,
              paddingLeft: '15px',
              paddingRight: '15px'
            }}>LEADERSHIP:  </span> 
            <span style={{ 
              fontFamily: 'dogica, sans-serif',
              textShadow:  `
              2px 2px 2px rgba(0, 181, 195, 0.7), 
              -2px -2px 2px rgba(0, 181, 195, 0.7), 
              2px -2px 2px rgba(0, 181, 195, 0.7), 
              -2px 2px 2px rgba(0, 181, 195, 0.7)
             `,
            fontSize: '10px',
            }}>recruitment membership chair of w.i.c. </span><br />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={heartIcon} alt="Heart Icon" style={{ width: '25px', height: 'auto',  animation: 'pulse 1s infinite' }} />
            <span style={{ 
              fontFamily: 'dogica, sans-serif',
              textShadow:  `
              2px 2px 2px rgba(255,33,156,0.7), 
              -2px -2px 2px rgba(255,33,156,0.7), 
              2px -2px 2px rgba(255,33,156,0.7), 
              -2px 2px 2px rgba(255,33,156,0.7)
              `,
              paddingLeft: '15px',
              paddingRight: '15px'
            }}>PROGRAM:  </span> 
            <span style={{ 
              fontFamily: 'dogica, sans-serif',
              textShadow:  `
              2px 2px 2px rgba(0, 181, 195, 0.7), 
              -2px -2px 2px rgba(0, 181, 195, 0.7), 
              2px -2px 2px rgba(0, 181, 195, 0.7), 
              -2px 2px 2px rgba(0, 181, 195, 0.7)
             `,
            fontSize: '10px',
            }}>break through tech ai at ucla site</span><br />
        </div>
          </p>
        </div>
      </div>
    </div>
  );
}
