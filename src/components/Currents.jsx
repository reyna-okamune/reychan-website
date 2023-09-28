import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import ipodIcon from '../images/ipod-icon.jpg';
import desertIcon from '../images/desert-icon.jpg';
import pinkBearIcon from '../images/pink-bear.jpg';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Currents() {
    return (
      <div id="currents" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', paddingLeft: '10%', paddingRight: '10%'  }}>


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
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
          CURRENT FAVORITES
        </h1>
      </div>
      <p style={{
    fontFamily: 'dogica, sans-serif',
    fontSize: '12px',
    color: 'white',
    marginTop: '10px',
    paddingBottom: '50px',
    textShadow: `
    2px 2px 2px rgba(277,0,137,0.6), 
    -2px -2px 2px rgba(277,0,137,0.6), 
    2px -2px 2px rgba(277,0,137,0.6), 
    -2px 2px 2px rgba(277,0,137,0.6)
  `,
}}>
  <i className="far fa-heart"></i> &nbsp; &nbsp;fall 2023 &nbsp; &nbsp;<i className="far fa-heart"></i>

</p>

    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '20px'}}>
    <img src={pinkBearIcon} alt="pink bear icon" style={{ width: '75px', height: 'auto', alignSelf: 'center' }} />
    <div style={{ marginLeft: '20px' }}>
      <div style={{
        fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '14px', paddingBottom: '10px', 
        textShadow: `
          2px 2px 2px rgba(255,33,156,0.9), 
          -2px -2px 2px rgba(255,33,156,0.9), 
          2px -2px 2px rgba(255,33,156,0.9), 
          -2px 2px 2px rgba(255,33,156,0.9)
        `,
      }}>
        ACTIVITY
      </div>
      <div style={{
        fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '12px', 
        textShadow: `
        2px 2px 2px rgba(190, 78, 255, 0.8), 
        -2px -2px 2px rgba(190, 78, 255, 0.8), 
        2px -2px 2px rgba(190, 78, 255, 0.8), 
        -2px 2px 2px rgba(190, 78, 255, 0.8)
        `,
        display: 'inline',
      }}>
        cafes and shopping <i className="fas fa-heart"></i>
      </div>
    </div>
    </div>

  <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '20px', height: '150px' }}>
  <img src={ipodIcon} alt="ipod icon" style={{ width: '90px', height: 'auto', alignSelf: 'center' }} />
  <div style={{ marginLeft: '20px' }}>
    <div style={{
      fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '14px', paddingBottom: '10px',
      textShadow: `
        2px 2px 2px rgba(255,33,156,0.9), 
        -2px -2px 2px rgba(255,33,156,0.9), 
        2px -2px 2px rgba(255,33,156,0.9), 
        -2px 2px 2px rgba(255,33,156,0.9)
      `,
    }}>
      SONG
    </div>
    <a href="https://www.youtube.com/watch?v=CeA92xqw-QI" target="_blank" rel="noopener noreferrer" 
    style={{  textDecoration: 'none' ,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer' 
    }}>
    <div style={{
      fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '12px', 
      textShadow: `
      2px 2px 2px rgba(190, 78, 255, 0.8), 
        -2px -2px 2px rgba(190, 78, 255, 0.8), 
        2px -2px 2px rgba(190, 78, 255, 0.8), 
        -2px 2px 2px rgba(190, 78, 255, 0.8)
      `,
      display: 'inline',
    }}>
      “bags” by clairo <i className="fas fa-heart"></i>
    </div>
    </a>
  </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '30px'}}>
  <img src={desertIcon} alt="dessert icon" style={{ width: '120px', height: 'auto', alignSelf: 'center' }} />
  <div style={{ marginLeft: '0px' }}>
    <div style={{
      fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '14px', paddingBottom: '10px', 
      textShadow: `
        2px 2px 2px rgba(255,33,156,0.9), 
        -2px -2px 2px rgba(255,33,156,0.9), 
        2px -2px 2px rgba(255,33,156,0.9), 
        -2px 2px 2px rgba(255,33,156,0.9)
      `,
    }}>
      &nbsp;DESSERT
    </div>
    <div style={{
      fontFamily: 'dogica, sans-serif', color: 'white', fontSize: '12px', 
      textShadow: `
        2px 2px 2px rgba(190, 78, 255, 0.8), 
        -2px -2px 2px rgba(190, 78, 255, 0.8), 
        2px -2px 2px rgba(190, 78, 255, 0.8), 
        -2px 2px 2px rgba(190, 78, 255, 0.8)
      `,
      display: 'inline',
    }}>
      &nbsp;melon cream soda <i className="fas fa-heart"></i>
    </div>
  </div>
  </div>




  </div>
    );
  }