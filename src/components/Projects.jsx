
import React from "react";
export default function Projects() {
    return (
        <div id="projects" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '75px' }}>
            <h1
              style={{
                fontFamily: 'Protomo, sans-serif',
                fontSize: '60px',
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
              PROJECTS
            </h1>
          </div>
        </div>
        );
}