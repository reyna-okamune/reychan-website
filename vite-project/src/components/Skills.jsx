// src/components/Skills.jsx

import React from "react";
import flyingPowerpuff from '../images/move-powerpuff-me.jpg';

export default function Skills() {
    return (
        <div id="skills" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
            <h1
                style={{
                    fontFamily: 'Protomo, sans-serif',
                    fontSize: '45px',
                    color: 'white',
                    textShadow: `
                    3px 3px 3px rgba(255,33,156,0.9), 
                    -3px -3px 3px rgba(255,33,156,0.9), 
                    3px -3px 3px rgba(255,33,156,0.9), 
                    -3px 3px 3px rgba(255,33,156,0.9)
                `,
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginRight: '20px'
                }}
            >
                SKILLS
            </h1>

            <img src={flyingPowerpuff} alt="powerpuff girl" style={{ 
            width: '100px', 
            height: 'auto',
            animation: 'flying 1s infinite'
          
           }} />
           </div>
      

            <section 
            style={{ 
              marginBottom: '30px',
              fontFamily: 'dogica, sans-serif',
              color: 'white',
              fontSize: '13px',
              paddingLeft: '15px',
              paddingRight: '15px'
            }}>
              <h2 style = {{ 
                textShadow:  `
                2px 2px 2px rgba(255,33,156,0.7), 
                -2px -2px 2px rgba(255,33,156,0.7), 
                2px -2px 2px rgba(255,33,156,0.7), 
                -2px 2px 2px rgba(255,33,156,0.7)
                `,  
                paddingBottom: '20px'
              }}>LANGUAGES: </h2>
                <ul style = {{  
                textShadow:  `
                2px 2px 2px rgba(0, 181, 195, 0.7), 
                -2px -2px 2px rgba(0, 181, 195, 0.7), 
                2px -2px 2px rgba(0, 181, 195, 0.7), 
                -2px 2px 2px rgba(0, 181, 195, 0.7)
               `,}}>
                <li>python, C#, C++, javascript, kotlin</li>
                </ul>
            </section>

            <section 
            style={{ 
              marginBottom: '30px',
              fontFamily: 'dogica, sans-serif',
              color: 'white',
              fontSize: '13px',
              paddingLeft: '15px',
              paddingRight: '15px'
            }}>
              <h2 style = {{ 
                textShadow:  `
                2px 2px 2px rgba(255,33,156,0.7), 
                -2px -2px 2px rgba(255,33,156,0.7), 
                2px -2px 2px rgba(255,33,156,0.7), 
                -2px 2px 2px rgba(255,33,156,0.7)
                `,  
                paddingBottom: '20px'
              }}>IDEs: </h2>
                <ul style = {{  
                textShadow:  `
                2px 2px 2px rgba(0, 181, 195, 0.7), 
                -2px -2px 2px rgba(0, 181, 195, 0.7), 
                2px -2px 2px rgba(0, 181, 195, 0.7), 
                -2px 2px 2px rgba(0, 181, 195, 0.7)
               `,}}>
                <li>visual studio code, pycharm,</li>
                <li>jupyter notebook, replit, </li>
                <li>ubuntu, deepnote, android studio </li>
                
                </ul>
            </section>

            <section 
            style={{ 
              marginBottom: '30px',
              fontFamily: 'dogica, sans-serif',
              color: 'white',
              fontSize: '13px',
              paddingLeft: '15px',
              paddingRight: '15px'
            }}>
              <h2 style = {{ 
                textShadow:  `
                2px 2px 2px rgba(255,33,156,0.7), 
                -2px -2px 2px rgba(255,33,156,0.7), 
                2px -2px 2px rgba(255,33,156,0.7), 
                -2px 2px 2px rgba(255,33,156,0.7)
                `,  
                paddingBottom: '20px'
              }}>CERTIFICATES: </h2>
                <ul style = {{  
                textShadow:  `
                2px 2px 2px rgba(0, 181, 195, 0.7), 
                -2px -2px 2px rgba(0, 181, 195, 0.7), 
                2px -2px 2px rgba(0, 181, 195, 0.7), 
                -2px 2px 2px rgba(0, 181, 195, 0.7)
               `,
               fontSize: '11px',
               }}>
                <li>machine learning foundations - eCornell </li>
                <li>foundational c# - microsoft</li>
                </ul>
            </section>
        </div>
    );
}
