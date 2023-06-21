"use client"

import React from 'react';

import "./first-section.css"
import { Col, Container, Row } from 'react-bootstrap';

export const FirstSection = () => {

    // @ts-ignore
    const age = Math.floor((new Date() - new Date(1999, 3, 27)) / 3.15576e+10)

    return (
        <section className="first-section-about" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container>
                <Row className="align-items-center" style={{
                    height: "100vh"
                }}>
                    <Col xs={12} md={6} xl={7}>
                            <div>
                                <span className="tagline">
                                    Profile
                                </span>
                                <h1>
                                    {`Hi, I'm Diogo Salvador`}
                                </h1>
                                <p>
                                As a passionate {age}-year-old software engineer, I have developed a diverse range of projects that showcase my expertise across multiple technologies and industries. I pride myself on being a dynamic, proactive, and creative individual, always ready to face new challenges and eager to contribute to the ongoing innovation within the tech industry.I am a strong advocate for process automation and constantly seek out ways to streamline repetitive tasks, enhancing both my personal and collective workflows. My problem-solving skills, combined with my adaptability and enthusiasm, make me an invaluable asset to any team.
                                </p>
                            </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className='first-section-about-image'>
                            <img src="/about/profile-image.jpg" alt="Diogo Salvador's profile image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}