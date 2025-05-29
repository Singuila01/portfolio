import React from 'react';
import './styles.css'
import Contact from './pages/Contact'

function Footer() {
    return (
        <div>
            {/* <Contact /> */}
            <footer>
                <div>
                    <p>© {new Date().getFullYear()} Singuila - Développeur Web</p>
                    <ul>
                        <li>
                            <a href="https://github.com/Singuila01" target="_blank" rel="noopener noreferrer" className='github'></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/singuila-m-ab52b6250/" target="_blank" rel="noopener noreferrer" className='linkedin'></a>
                        </li>
                        <li>
                            <a href="mailto:singuila@email.com" className='mail'></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;