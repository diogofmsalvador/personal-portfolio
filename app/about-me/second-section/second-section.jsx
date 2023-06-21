"use client"

import React from 'react';

import "./second-section.css"
import { Col, Container, Row } from 'react-bootstrap';

export const SecondSection = () => {
    return (
        <section className="second-section-about" style={{
            position: "relative",
            zIndex: 1
        }}>

            <Container>
                <Row>
                    <h2>
                        {`Work Experience`}
                    </h2>
                    <hr/>
                    <div className='second-section-about-work'>
                        <Col xs={12} md={6} xl={6} className='second-section-about-left'>
                        </Col>
                        <Col xs={12} md={6} xl={6} className='second-section-about-right'>
                        <div className="second-section-about-work-card">
                            <div className='second-section-about-work-card-header'>
                                <h3>
                                    Deloitte Delivery Center S.A.
                                </h3>
                            </div>
                            <div className='second-section-about-work-card-content'> 
                                <h4>
                                    Junior Programmer
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </p>
                                <div className='second-section-about-work-card-timeline-labels'>
                                    <p style={{
                                        float: "left"
                                    }}>
                                        Start Date
                                    </p>
                                    <p style={{
                                        float: "right"
                                    }}>
                                        End Date
                                    </p>
                                </div>
                                <div className='second-section-about-work-card-timeline'></div>
                                <div className='second-section-about-work-card-timeline-labels'>
                                    <p className='second-section-about-work-card-timeline-labels-dates' style={{
                                        float: "left"
                                    }}>
                                        Start Date
                                    </p>
                                    <p className='second-section-about-work-card-timeline-labels-dates' style={{
                                        float: "right"
                                    }}>
                                        End Date
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Col>
                    </div>
                </Row>
            </Container>

        </section>
    )
}