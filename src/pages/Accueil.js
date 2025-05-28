import React from 'react';
import Footer from '../Footer'
import '../styles.css'

const Accueil = () => (
    <div className='section'>
        <div className='content-header'>
            <header>
                <h1>Bienvenue sur mon portfolio</h1>
                <p>Je m'appelle Singuila Mbaye Amadou, développeur web passionné.</p>
                <a href='' className='button'>Voir plus</a>
            </header>
        </div>
        <div className='main'>
            <div className='profile image before'>
                <div>
                    <h2>Qui suis-je ?</h2>
                    <p>
                        Je m'appelle <span>Singuila MBAYE AMADOU</span>. Âgé de 20 ans, je suis en 3e année d'un Bachelor Développeur Web à MyDigitalSchool Rennes. J'ai déjà eu l'occasion de travailler sur plusieurs projets web, ce qui m'a permis de développer mes compétences en développement frontend et backend. Curieux, motivé et passionné par les nouvelles technologies, je suis toujours prêt à relever de nouveaux défis.
                    </p>
                </div>
            </div>
            <div id="skills" className='skills color before'>
                <h2>Compétences</h2>
                <p>Ayant réalisé des études dans le développement, j'ai pu évidemment acquérir des compétences.</p>
                <div className='under-skills'>
                    <div>
                        <h3>Front-end</h3>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>React / React Native</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Back-end</h3>
                        <ul>
                            <li>PHP</li>
                            <li>SQL</li>
                            <li>Laravel</li>
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

            <div id className='projects color before'>
                <h2>Projets</h2>
                <ul>
                    <li>
                        <p><span>CyberSafeDLS</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget purus id leo auctor iaculis. Integer malesuada, enim ac pharetra sollicitudin, tellus metus iaculis leo, sit amet tincidunt tortor libero quis urna.</p>
                    </li>
                    <li>
                        <p><span>TraceGPS</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget purus id leo auctor iaculis. Integer malesuada, enim ac pharetra sollicitudin, tellus metus iaculis leo, sit amet tincidunt tortor libero quis urna.</p>
                    </li>
                    <li>
                        <p><span>LOCO</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget purus id leo auctor iaculis. Integer malesuada, enim ac pharetra sollicitudin, tellus metus iaculis leo, sit amet tincidunt tortor libero quis urna.</p>
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    </div>
);

export default Accueil;