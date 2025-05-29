import React from 'react';
import './styles.css';

function MenuBureau() {
    return (
        <header className='header bureau'>
            {/* <div className='logo'>Mon Portfolio</div> */}
            <nav>
                <a href="#" className='link'>Accueil</a>
                <a href="#profile" className='link'>Qui suis-je ?</a>
                <a href="#skills" className='link'>Compétences</a>
                <a href="#experiences" className='link'>Expériences</a>
                <a href="#projets" className='link'>Projets</a>
            </nav>
        </header>
    );
}


export default MenuBureau;