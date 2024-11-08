import React from "react";

export default function Projects() {
    const styles = {
        container: {
            padding: '2rem',
            position: 'relative',
            backgroundColor: '#000',
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
    };

    return (
        <div id="projects" style={styles.container}>
            <h1 style={styles.title}>Projects</h1>
        </div>
    );
}
