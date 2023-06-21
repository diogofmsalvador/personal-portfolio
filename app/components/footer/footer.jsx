import React from 'react';

import './footer.css';
import { Envelope, Github, Linkedin, Mailbox, Telephone } from 'react-bootstrap-icons';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-content">
                    <div className="footer-content-center-one">
                        <h3>About the brand</h3>
                        <p style={{
                            width: "70%",
                            lineHeight: "inherit"
                        }}>
                        Embark on a journey of collaboration, creativity, and success with me. Let's work together to create a digital experiences that elevate your brand.
                        </p>
                    </div>
                    <div className="footer-content-center-one">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#projects">Services</a></li>
                            <li><a href="#projects">Contact Me</a></li>
                        </ul>
                    </div>
                    <div className="footer-content-center-two">
                        <h3>Information</h3>
                        <ul>
                            <li><a href="#home">Licences</a></li>
                            <li><a href="#about-me">About Me</a></li>
                            <li><a href="#about-me">FAQ</a></li>
                            <li><a href="#skills">Skills</a></li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h3>Contacts</h3>
                        <ul>
                            <li>
                                <a href="#home">
                                    <Envelope size={20} style={{
                                        marginRight: "10px",
                                        transform: "translateY(-1px)"
                                    }} />
                                    dfmsalvador@outlook.com
                                </a>
                            </li>
                            <li>
                                <a href="#home">
                                    <Telephone size={20} style={{
                                        marginRight: "10px",
                                        transform: "translateY(-1px)"
                                    }} />
                                    +351 910148429
                                </a>
                            </li>
                            <li>
                                <a href="#home">
                                    <Linkedin size={20} style={{
                                        marginRight: "10px",
                                        transform: "translateY(-1px)"
                                    }} />
                                    @diogofmsalvador
                                </a>
                            </li>
                            <li>
                                <a href="#home">
                                    <Github size={20} style={{
                                        marginRight: "10px",
                                        transform: "translateY(-1px)"
                                    }} />
                                    @diogofmsalvador
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom container">
                    <p>Made By Diogo Salvador | 2023</p>
                </div>
        </footer>
    )
}