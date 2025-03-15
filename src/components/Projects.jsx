import habibeats from '../images/project_banners/habibeats_logo.png';
import marinahacks from '../images/project_banners/marinahacks_logo.png';
import daily_vibe_app from '../images/project_banners/daily_vibe_app_banner.png';

import { useEffect, useRef } from 'react';

export default function Projects() {
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
        projectGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            padding: '2rem 0',
        },
        projectCard: {
            backgroundColor: '#fff',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            textDecoration: 'none',
            padding: '0.5rem',
        },
        projectBanner: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
        },
        projectInfo: {
            padding: '1.5rem',
        },
        projectTitle: {
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: '#ff789f',
            marginBottom: '0.5rem',
            fontWeight: '600',
            textAlign: 'center',
        },
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

    .project-card:hover {
        transform: scale(1.05);
    }
  `;

    const projects = [
        {
            title: "Daily Vibe Blog",
            imageUrl: daily_vibe_app,
            githubUrl: "https://github.com/reyna-okamune/Daily-Vibe-Blog",
        },
        {
            title: "Concert Pairing App",
            imageUrl: habibeats,
            githubUrl: "https://github.com/maxiguillermo1/habiBeats",
        },
        {
            title: "MarinaHacks 4.0 Website",
            imageUrl: marinahacks,
            githubUrl: "https://github.com/csulbwic/MarinaHacks-4.0",
        },
    ];

    return (
        <>
            <style>{fadeInKeyframes}</style>
            <div id="projects" ref={containerRef} className="header-info-container">
                <div className="animate-on-scroll">
                    <h1 style={styles.title}>Projects</h1>
                </div>
                <div className="animate-on-scroll" style={styles.projectGrid}>
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.projectCard}
                            className="project-card"
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                style={styles.projectBanner}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
