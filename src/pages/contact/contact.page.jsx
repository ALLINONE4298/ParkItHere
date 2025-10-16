import './contact.styles.css';

import React, { useState } from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

const ContactPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        setSubmitted(true);
    };

    return (
        <>
            <Header />
            <div className="contact-container">
                <h1 className='contact-title'>Contact Us</h1>
                {submitted ? (
                    <div className="contact-success">
                        Thank you for contacting us! We'll get back to you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="contact-field">
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input
                                className="contact-input"
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input
                                className="contact-input"
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="message" className="contact-label">Message</label>
                            <textarea
                                className="contact-textarea"
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="contact-submit-btn">
                            Send
                        </button>
                    </form>
                )}

                <div className="contact-or">
                    <span style={{ flex: 1, borderBottom: '2px dashed #aaa', marginRight: '12px' }}></span>
                    <strong>OR</strong>
                    <span style={{ flex: 1, borderBottom: '2px dashed #aaa', marginLeft: '12px' }}></span>
                </div>
                <p className="contact-email">
                    Prefer email? Reach us directly at <a href="mailto:support@parkithere.com">support@parkithere.com</a>.
                </p>

            </div>
            <Footer />
        </>
    );
};

export default ContactPage;