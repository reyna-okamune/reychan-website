import React from 'react';


export default function About() {
  const styles = {
    container: {
      padding: '2rem',
      // border: '1px solid #ccc',
      position: 'relative',
      backgroundColor: '#fff', // temporary background color
      paddingTop: '13rem',
    },
    title: {
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      fontWeight: 'bold',
      color: '#ff789f',
    },
    text: {
      fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)',
      color: '#ff789f',
    }
  }
  return (
    <>
      <div id="aboutMe" style={styles.container}>
        <h1 style={styles.title}>Reyna Okamune</h1>
        <p style={styles.text}>Aspiring Software Engineer</p>
      </div>
    </>
  );
}
