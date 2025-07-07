import React from 'react';
import Footer from '../Footer'
// import '../styles.css'
import '../styles_new.css'
import singuila from '../assets/singuila.jpg'

const Accueil = () => (
    <div className='section'>
        <div className='content-header'>
            <header className='desktop'>
                <div className='hello'>
                    <div>
                        <p>Bienvenue,</p>
                        <div>
                            <h1>Je suis</h1>
                            <h1>Singuila Mbaye Amadou</h1>
                        </div>
                        <p>Je suis développeur web.</p>
                    </div>
                    <div>
                        <img src={singuila} />
                    </div>
                </div>
            </header>
            <header className='phone'>
                <h1><span>Portfolio de</span> <br />Singuila MBAYE AMADOU</h1>
                <p><span>Intégrateur CSS</span> en alternance</p>
            </header>
        </div>

        <div className='main'>
            <div id='profile' className='profile image before'>
                <div className='qui-suis-je'>
                    <div className='presentation'>
                        <img src={singuila} />
                        <div>
                            <ul>
                                <li className='prenom'>
                                    <h2 className='name'>Singuila MBAYE AMADOU</h2>
                                </li>
                                <li className='age'>
                                    <p>Age</p>
                                    <p>20 ans</p>
                                </li>
                                <li className='residence'>
                                    <p>Résidence</p>
                                    <p>Gévezé, Bretagne</p>
                                </li>
                                <li className='etude'>
                                    <p>Etude</p>
                                    <p>Bachelor Développeur Web</p>
                                </li>
                                <li className='travail'>
                                    <p>Job</p>
                                    <p>Intégrateur CSS</p>
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
                    <li className='biocoop'>
                        <div>
                            <p>[STAGE]</p>
                            <p>Technicien Junior</p>
                        </div>
                        <p>Chez <span>Biocoop</span></p>
                        <p>(Janvier - Avril 2022)</p>
                    </li>
                    <li>
                        <div>
                            <p>[STAGE]</p>
                            <p>Développeur Web</p>
                        </div>
                        <p>Chez <span>Anapoly</span></p>
                        <p>(Mai - Juin 2023)</p>
                    </li>
                    <li>
                        <div>
                            <p>[STAGE]</p>
                            <p>Développeur Web</p>
                        </div>
                        <p>Chez <span>Myrtilles - Les mots libres</span></p>
                        <p>(Janvier - Février 2024)</p>
                    </li>
                    <li>
                        <div>
                            <p>[ALTERNANCE]</p>
                            <p>Intégrateur CSS</p>
                        </div>
                        <p>Chez <span>Touzazimut</span></p>
                        <p>(Septembre 2024 - Août 2025)</p>
                    </li>
                </ul>
            </div>

            <div id="projets" className='projects color before'>
                <h2>Projets</h2>
                <ul>
                    <li>
                        <div>
                            <p><span>[CYBERSAFEDLS]</span></p>
                        </div>
                        <p>Site internet permettant de faire de la prévention sur la cybersécurité et ses enjeux.</p>
                    </li>
                    <li>
                        <div>
                            <p><span>[TRACEGPS]</span></p>
                        </div>
                        <p>TraceGPS est une application web permettant de tracer et partager les courses réalisées par des coureurs.</p>
                    </li>
                    <li>
                        <div>
                            <p><span>[LOCO]</span></p>
                        </div>
                        <p>LOCO est une application mobile permettant aux particuliers de commander des produits des commerçants locaux, proche des chez eux.</p>
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    </div>
);

export default Accueil;