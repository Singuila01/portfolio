import React from 'react';
import Footer from '../Footer'
import '../styles.css'
import singuila from '../assets/singuila.jpg'

const Accueil = () => (
    <div className='section'>
        <div className='content-header'>
            <header className='desktop'>
                <h1>Bienvenue sur mon portfolio</h1>
                <p>Je m'appelle Singuila Mbaye Amadou, développeur web passionné.</p>
                {/* <a href='' className='button'>Voir plus</a> */}
            </header>
            <header className='phone'>
                <h1><span>Portfolio de</span> <br />Singuila MBAYE AMADOU</h1>
                <p><span>Intégrateur CSS</span> en alternance</p>
            </header>
        </div>
        <div className='main'>
            <div id='profile' className='profile image before'>
                <div className='qui-suis-je'>
                    <h2>Qui suis-je ?</h2>
                    <div>
                        <div>
                            <img src={singuila} />
                        </div>
                        <div className='presentation'>
                            <p>
                                Je m'appelle <span>Singuila MBAYE AMADOU</span>.<br/>Âgé de 20 ans, je suis en <span>3e année</span> d'un <span>Bachelor Développeur Web</span> à <span>MyDigitalSchool Rennes</span>.
                            </p>
                            <ul>
                                <li>
                                    <p>Nom: Singuila MBAYE AMADOU</p>
                                </li>
                                <li>
                                    <p>Age: 20 ans</p>
                                </li>
                                <li>
                                    <p>Lieu de résidence: Gévezé</p>
                                </li>
                                <li>
                                    <p>Etude: Bachelor Développeur Web</p>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </div>
            </div>
            <div id="skills" className='skills color before'>
                <h2>Compétences</h2>
                <p>Ayant réalisé des études dans le développement informatique, j'ai pu évidemment acquérir des compétences.</p>
                <div className='under-skills'>
                    <div>
                        <h3>Front-end</h3>
                        <ul>
                            <li className='html'>HTML</li>
                            <li className='css'>CSS</li>
                            <li className='javascript'>Javascript</li>
                            <li className='react'>React</li>
                            <li className='react'>React Native</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Back-end</h3>
                        <ul>
                            <li className='php'>PHP</li>
                            <li className='sql'>SQL</li>
                            <li className='php'>Laravel</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="experiences" className='experience color before'>
                <h2>Expériences</h2>
                <ul>
                    <li>
                        <p><span>[STAGE] Technicien Junior</span></p>
                        <p>chez <span>Biocoop</span></p>
                        <p>(Janvier - Avril 2022)</p>
                    </li>
                    <li>
                        <p><span>[STAGE] Développeur Web</span></p>
                        <p>chez <span>Anapoly</span></p>
                        <p>(Mai - Juin 2023)</p>
                    </li>
                    <li>
                        <p><span>[STAGE] Développeur Web</span></p>
                        <p>chez <span>Myrtilles - Les mots libres</span></p>
                        <p>(Janvier - Février 2024)</p>
                    </li>
                    <li>
                        <p><span>[ALTERNANCE] Intégrateur CSS</span></p>
                        <p>chez <span>Touzazimut</span></p>
                        <p>(Septembre 2024 - Août 2025)</p>
                    </li>
                </ul>
            </div>

            <div id="projets" className='projects color before'>
                <h2>Projets</h2>
                <ul>
                    <li>
                        <p><span>CyberSafeDLS</span></p>
                        <p>Site internet permettant de faire la prévention sur la cybersécurité.</p>
                    </li>
                    <li>
                        <p><span>TraceGPS</span></p>
                        <p>TraceGPS est une application web permettant de tracer et partager les courses réalisées par des coureurs.</p>
                    </li>
                    <li>
                        <p><span>LOCO</span></p>
                        <p>LOCO est une application mobile permettant aux particuliers de commander des produits des commerçants locaux, proche des chez eux.</p>
                    </li>
                </ul>
            </div>

            

            <Footer />
        </div>
    </div>
);

export default Accueil;