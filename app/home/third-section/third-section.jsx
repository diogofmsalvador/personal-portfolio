"use client"

import React from 'react';
import { ArrowRightCircle } from "react-bootstrap-icons"
import { Col, Container, Row } from 'react-bootstrap';

import "./third-section.css"

export const ThirdSection = () => {
    return (
        <section className="third-section" id="home" style={{
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "center"
        }}>
            <Container>
                <Row className="align-items-center" style={{
                    height: "100vh"
                }}>
                    <Col xs={12} md={6} xl={6}>
                        <div className="grid-container vibrate-1">
                            <div className="item1 pulsate-fwd-1">
                                <img src="/img/first-section-img.png" alt="Header Img" />
                            </div>
                            <div className="item2 pulsate-fwd-2">
                                <img src="/img/first-section-img.png" alt="Header Img" />
                            </div>
                            <div className="item4 pulsate-fwd-3">
                                <img src="/img/first-section-img.png" alt="Header Img" />
                            </div>
                            <div className="item5 pulsate-fwd-4">
                                <img src="/img/first-section-img.png" alt="Header Img" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                            <div>
                                <span className="tagline">
                                    Empower Your Growth
                                </span>
                                <h2>
                                    {`Power Up Your Digital Potential`}
                                </h2>
                                <p>
                                Harness the power of innovative solutions, expert guidance, and cutting-edge technologies to unlock new possibilities for your business. Together, let's navigate the digital landscape and propel your success to new heights. Discover a selection of developed projects and explore my diverse skill set.
                                </p>
                                <div className="flex pr-3 w-full">
                                    <button onClick={() => { console.log("connect") }}>Projects <ArrowRightCircle size={25}></ArrowRightCircle></button>
                                    <button onClick={() => { console.log("connect") }}>My Skills <ArrowRightCircle size={25}></ArrowRightCircle></button>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}