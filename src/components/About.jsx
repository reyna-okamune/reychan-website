import React, { useEffect, useRef } from 'react';
import photo1 from '../images/me-gallery/reyna_main_picture.png';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const styles = {
    title: {
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      fontWeight: 'bold',
      color: '#ff789f',
      paddingBottom: '0.25rem',
    },
    subtitle: {
      fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)',
      color: '#ff789f',
    },
    description: {
      margin: '1rem 0',
      fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)',
      color: '#789fff',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
    },
    photo: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '1rem',
    },
    projectLink: {
      fontWeight: 'bold',
      cursor: 'pointer',

    }
  }

  const fadeInKeyframes = `
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
      will-change: opacity, transform;
    }
    
    .fade-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;

  return (
    <>
      <style>{fadeInKeyframes}</style>
      <div id="aboutMe" ref={containerRef} className="header-info-container">
        <div className="animate-on-scroll">
          <h1 style={styles.title}>Reyna Okamune</h1>
          <p style={styles.subtitle}>Personal Webpage & Portfolio</p>
          <p style={styles.description}>
             Welcome to my personal webpage! I tried to make it as chic and personal while still showcasing my coding skills! Learn more about me here! (◕ᴗ◕✿)
          </p>
          <br></br>
          <p style={styles.description}>Currently Working On: <a style={styles.projectLink} href="https://daily-vibe-blog.vercel.app/" target="_blank">Daily Vibe Web App</a>! Check it out! ♡</p>

        </div>
      </div>
    </>
  );
}
