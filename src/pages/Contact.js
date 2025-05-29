import React, { useState } from "react";
import '../styles.css'

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        /*
            L'envoi direct d'email depuis le frontend n'est pas sécurisé et expose votre adresse à des abus.
            Utilisez un service backend (API, serverless function, service tiers comme EmailJS, Formspree, etc.).
            Exemple avec fetch vers une API (à implémenter côté serveur) :
        */

        // Remplacez l'URL par celle de votre backend sécurisé
        await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        e.preventDefault();
        // Ici, vous pouvez ajouter l'envoi vers une API ou un service email
        setSubmitted(true);
    };

    return (
        <div className="main">
            <div className="contact">
                <h2>Contactez-moi</h2>
                {submitted ? (
                    <p>Merci pour votre message ! Je vous répondrai rapidement.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Votre nom"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Votre adresse mail"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Votre message"
                                />
                            </label>
                        </div>
                        <button type="submit">
                            Me contacter
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;