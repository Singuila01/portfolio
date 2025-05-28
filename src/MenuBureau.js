import React from 'react';
import './styles.css';

function MenuBureau() {
    return (
        <header className='header bureau'>
            <div className='logo'>Mon Portfolio</div>
            <nav>
                <a href="#projets" className='link'>Projets</a>
                <a href="#competences" className='link'>Compétences</a>
                <a href="#contact" className='link'>Contact</a>
            </nav>
        </header>
    );
}


export default MenuBureau;