import React from 'react';

const MenuMobile = () => {
    return (
        <header className='header mobile' style={styles.header}>
            <div className='logo' style={styles.logo}>MonPortfolio</div>
            <nav>
                <button className='menu-bouton' style={styles.menuButton} aria-label="Ouvrir le menu">
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </button>
            </nav>
        </header>
    );
};

const styles = {
    bar: {
        width: '25px',
        height: '3px',
        background: '#fff',
        borderRadius: '2px',
        display: 'block',
    },
};

export default MenuMobile;