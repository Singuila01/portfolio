import React, { useState } from 'react';
import './styles.css'

const MenuMobile = () => {
    const [menuOuvert, setMenuOuvert] = useState(false);

    const toggleMenu = () => {
        setMenuOuvert(!menuOuvert);
    };

    return (
        <div className='header mobile'>
            {/* Bouton burger en bas de la page */}
            <div className='container'>
                <button
                    onClick={toggleMenu}
                    aria-label="Ouvrir le menu"
                    className='menu-boutton'
                >
                    Ouvrir le menu
                </button>

                {menuOuvert && (
                    <ul style={styles.menu} className='menu'>
                        <li><a href="#" className='link'>Accueil</a></li>
                        <li><a href="#profile" className='link'>Qui suis-je ?</a></li>
                        <li><a href="#skills" className='link'>Compétences</a></li>
                        <li><a href="#experiences" className='link'>Expériences</a></li>
                        <li><a href="#projets" className='link'>Projets</a></li>
                    </ul>
                )}
            </div>
        </div>
    );
};

const styles = {
    bar: {
        width: '24px',
        height: '3px',
        background: '#fff',
        borderRadius: '2px',
    }
};

export default MenuMobile;
