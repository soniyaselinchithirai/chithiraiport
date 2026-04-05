import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's create something amazing together.</h3>
                        <p className="contact-desc">
                            I am currently open for internship opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>chithiraisoniyaselin@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>8074600792</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">💼</div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p><a href="https://linkedin.com/in/chithirai-soniya-selin" target="_blank" rel="noreferrer" style={{color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline'}}>Connect with me</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://linkedin.com/in/chithirai-soniya-selin" className="social-icon" title="LinkedIn">in</a>
                            <a href="https://github.com/soniyaselinchithirai" className="social-icon" title="GitHub">Gi</a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Hi Soniya, I'd like to talk about..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;