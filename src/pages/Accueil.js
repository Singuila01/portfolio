import React from 'react';
import '../styles.css'

const Accueil = () => (
    <div className='container'>
        <header>
            <h1>Bienvenue sur mon portfolio</h1>
            <p>Je m'appelle Singuila Mbaye Amadou, développeur web passionné.</p>
        </header>

        <div>
            <div>
                <h2>Présentation</h2>
                <p>
                    Je suis un développeur spécialisé en JavaScript et React. J'aime créer des applications web modernes et performantes.
                </p>
            </div>

            <div>
                <h2>Compétences</h2>
                <ul>
                    <li>JavaScript / TypeScript</li>
                    <li>React / Redux</li>
                    <li>HTML / CSS / SASS</li>
                    <li>Node.js / Express</li>
                    <li>Git / GitHub</li>
                </ul>
            </div>

            <div>
                <h2>Expériences</h2>
                <ul>
                    <li>
                        <strong>Développeur Frontend</strong> chez [Entreprise] (2022 - présent)
                    </li>
                    <li>
                        <strong>Stage Développeur Web</strong> chez [Entreprise] (2021)
                    </li>
                </ul>
            </div>

            <div>
                <h2>Projets</h2>
                <ul>
                    <li>
                        <strong>Portfolio</strong> - Site personnel réalisé avec React.
                    </li>
                    <li>
                        <strong>Application Todo</strong> - Gestionnaire de tâches en ligne.
                    </li>
                </ul>
            </div>

        </div>
    </div>
);

export default Accueil;