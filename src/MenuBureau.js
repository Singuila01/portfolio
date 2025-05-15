import React from 'react';

function MenuBureau() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>Mon Portfolio</div>
            <nav style={styles.nav}>
                <a href="#projets" style={styles.link}>Projets</a>
                <a href="#competences" style={styles.link}>Compétences</a>
                <a href="#contact" style={styles.link}>Contact</a>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 48px',
        backgroundColor: '#222',
        color: '#fff',
    },
    logo: {
        fontSize: '2rem',
        fontWeight: 'bold',
        letterSpacing: '2px',
    },
    nav: {
        display: 'flex',
        gap: '32px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.1rem',
        transition: 'color 0.2s',
    }
};

export default MenuBureau;