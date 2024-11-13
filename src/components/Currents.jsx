import React, { useEffect, useRef } from "react";
import girlSoConfusing from '../images/current-songs/girl_so_confusing_cover.jpg';
import bags from '../images/current-songs/bags_cover.jpg';
import jellycat from '../images/current-items/baguette_transparent.png';
import coachbag from '../images/current-items/coach_bag_transparent.png';
import fashionIssue1 from '../images/current-fashion/rainy_magazine.png';
import fashionIssue2 from '../images/current-fashion/sporty_magazine.png';

export default function Currents() {
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

        const elements = containerRef.current.querySelectorAll('.animate-title, .animate-tunes, .animate-items, .animate-fashion');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const styles = {
        container: {
            padding: 'clamp(1rem, 4vw, 4rem)',
            position: 'relative',
            backgroundColor: '#ffeef3',
            paddingTop: '10.5rem',
        },
        title: {
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#ff789f',
            marginBottom: '1rem',
        },
        subTitle: {
            fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)',
            color: '#789fff',
        },
        itemContainer: {
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            alignItems: 'flex-start',
            padding: 'clamp(0.5rem, 4vw, 4rem)',
        },
        description: {
            flex: '1',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
            lineHeight: '1.6',
            color: '#666',
        },
        itemsContainer: {
            flex: '2',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            justifyItems: 'center',
            alignItems: 'center',
        },
        item: {
            backgroundColor: 'transparent',
            padding: '2rem',
            borderRadius: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            height: '100%',
            maxWidth: '400px',
            width: '100%',
            alignItems: 'center',
            textAlign: 'center',
        },
        itemInfo: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        itemTitle: {
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#ff789f',
            fontWeight: '600',
        },
        itemSubtitle: {
            fontSize: 'clamp(0.8rem, 1.6vw, 1rem)',
            color: '#789fff',
            fontWeight: '500',
        },
        itemDescription: {
            flex: '1',
            fontSize: 'clamp(0.8rem, 1.6vw, 1rem)',
            lineHeight: '1.4',
            fontWeight: '500',
            color: '#789fff',
        }
    };

    const fadeInKeyframes = `
        .animate-title,
        .animate-tunes,
        .animate-items,
        .animate-fashion {
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
            <div id="currents" ref={containerRef} style={styles.container}>
                <div className="animate-title">
                    <h1 style={styles.title}>Current Favorites</h1>
                </div>
                
                <p style={styles.subTitle}>tunes: </p>
                <div className="animate-tunes" style={styles.itemContainer}>
                    <div style={styles.itemsContainer}>
                        {/* Song 1 */}
                        <div style={styles.item}>
                            <div style={styles.itemInfo}>
                                <div style={styles.itemTitle}>Girl, so confusing</div>
                                <div style={styles.itemSubtitle}>Charli XCX and Lorde</div>
                                <img 
                                    src={girlSoConfusing} 
                                    alt="Girl, so confusing cover" 
                                    style={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        marginTop: '1rem',
                                        borderRadius: '0.25rem'
                                    }}
                                />
                            </div>
                            <div style={styles.itemDescription}>
                                <p>
                                    "it's so confusing sometimes to be a girl
                                    <br />
                                    how do you feel being a girl?
                                    <br />
                                    i don't know, i'm just a girl."
                                </p>
                            </div>
                        </div>

                        {/* Song 2 */}
                        <div style={styles.item}>
                            <div style={styles.itemInfo}>
                                <div style={styles.itemTitle}>Bags</div>
                                <div style={styles.itemSubtitle}>Clairo</div>
                                <img 
                                    src={bags} 
                                    alt="Bags cover" 
                                    style={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        marginTop: '1rem',
                                        borderRadius: '0.25rem'
                                    }}
                                />
                            </div>
                            <div style={styles.itemDescription}>
                                <p>
                                    "can you see me?
                                    <br />
                                    i'm waiting for the right time"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p style={styles.subTitle}>items: </p>
                <div className="animate-items" style={styles.itemContainer}>
                    <div style={styles.itemsContainer}>
                        {/* Item 1 */}
                        <div style={styles.item}>
                            <div style={styles.itemInfo}>
                                <div style={styles.itemTitle}>Baguette Plushie</div>
                                <div style={styles.itemSubtitle}>Jellycat Amuseables</div>
                                <img 
                                    src={jellycat} 
                                    alt="Baguette Plushie" 
                                    style={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        marginTop: '1rem',
                                        borderRadius: '0.25rem'
                                    }}
                                />
                            </div>
                            <div style={styles.itemDescription}>
                                <p>
                                    gifted to me by my boyfriend! ♡
                                    <br />
                                    it sits in front of my computer to keep me company!
                                </p> 
                            </div>
                        </div>

                         {/* Item 2 */}
                         <div style={styles.item}>
                            <div style={styles.itemInfo}>
                                <div style={styles.itemTitle}>Nolita 19 with Cherry Print</div>
                                <div style={styles.itemSubtitle}>Coach</div>
                                <img 
                                    src={coachbag} 
                                    alt="Nolita 19 with Cherry Print" 
                                    style={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        marginTop: '1rem',
                                        borderRadius: '0.25rem'
                                    }}
                                />
                            </div>
                            <div style={styles.itemDescription}>
                                <p>
                                    the perfect small shoulder bag!
                                    <br />
                                    works well with my outfits!
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>

                <p style={styles.subTitle}>magazine outfits: </p>
                <div className="animate-fashion" style={styles.itemContainer}>
                    <div style={styles.itemsContainer}>
                        {/* Fashion Issue 1 */}
                        <div style={styles.item}>
                            <div style={styles.itemInfo}>
                                <div style={styles.itemTitle}>Japanese Rainy Fashion</div>
                                <div style={styles.itemSubtitle}>Morning Musume</div>
                                <img 
                                    src={fashionIssue1} 
                                    alt="Rainy Fashion" 
                                    style={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        marginTop: '1rem',
                                        borderRadius: '0.25rem'
                                    }}
                                />
                            </div>
                            <div style={styles.itemDescription}>
                                <p>
                                    a chic take on rainy days in japan!
                                    <br />
                                    an inspo for my next trip!
                                </p> 
                            </div>
                        </div>

                         {/* Fashion Issue 2 */}
                         <div style={styles.item}>
                            <div style={styles.itemInfo}>
                                <div style={styles.itemTitle}>Sporty Chic Fashion</div>
                                <div style={styles.itemSubtitle}>Sneakers Summer Girl</div>
                                <img 
                                    src={fashionIssue2} 
                                    alt="Sporty Chic" 
                                    style={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        marginTop: '1rem',
                                        borderRadius: '0.25rem'
                                    }}
                                />
                            </div>
                            <div style={styles.itemDescription}>
                                <p>
                                    perfect inspo for the tennis court!
                                    <br />
                                    i want to be the fashionable player!
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
