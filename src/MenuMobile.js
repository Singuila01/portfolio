import React from 'react';

const MenuMobile = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>MonPortfolio</div>
            <nav>
                <button style={styles.menuButton} aria-label="Ouvrir le menu">
                    <span style={styles.bar}></span>
                    <span style={styles.bar}></span>
                    <span style={styles.bar}></span>
                </button>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        background: '#222',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        letterSpacing: '1px',
    },
    menuButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        padding: 0,
    },
    bar: {
        width: '25px',
        height: '3px',
        background: '#fff',
        borderRadius: '2px',
        display: 'block',
    },
};

export default MenuMobile;