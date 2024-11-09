import React from "react";


export default function Contact() {
  const styles = {
    container: {
      padding: '2rem',
      position: 'relative',
      backgroundColor: '#000',
      paddingTop: '10.5rem',
    },
    title: {
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      fontWeight: 'bold',
      color: '#ff789f',
    },
    text: {
      fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)',
      color: '#ff789f',
    },

  };

  return (
    <div id="contact" style={styles.container}>
      <h1 style={styles.title}>Contact</h1>

    </div>
  );
}
