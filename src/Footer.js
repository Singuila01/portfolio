import React from 'react';
import './styles.css'

function Footer() {
    return (
        <footer>
            <div>
                <p>© {new Date().getFullYear()} Singuila - Développeur Web</p>
                <p>
                    <a href="https://github.com/Singuila" target="_blank" rel="noopener noreferrer" style={{color: '#61dafb', textDecoration: 'none', margin: '0 0.5rem'}}>GitHub</a>
                    |
                    <a href="https://www.linkedin.com/in/singuila" target="_blank" rel="noopener noreferrer" style={{color: '#61dafb', textDecoration: 'none', margin: '0 0.5rem'}}>LinkedIn</a>
                    |
                    <a href="mailto:singuila@email.com" style={{color: '#61dafb', textDecoration: 'none', margin: '0 0.5rem'}}>Contact</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;