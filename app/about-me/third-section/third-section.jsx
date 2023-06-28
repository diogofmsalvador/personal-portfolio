"use client"

import React from 'react';

import { Container, Col, Row, Accordion, Card, Button } from 'react-bootstrap';

import "./third-section.css"
import { ArrowDownCircleFill, ArrowRightCircle } from 'react-bootstrap-icons';

export const ThirdSection = () => {
    return (
        <section className="third-section-about" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7} className="third-section-about-education">
                        <h2>
                            {`Education`}
                        </h2>
                        <div>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className='third-section-about-education-accordion'>
                                            <img src="/about/isep_wordmark_vintage.png" alt="ISEP Logo" />
                                            <div>
                                                <h3>Graduate in Systems Engineering</h3>
                                                <div>
                                                    Instituto Superior de Engenharia do Porto
                                                    <div>
                                                        2018 - 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Systems Engineering integrates an interdisciplinary approach that involves identifying needs, planning, developing, and analyzing systems that transform concepts into high-quality products and services. It focuses on creating and managing process development frameworks to meet market demands and drive organizational competitiveness. Systems Engineering combines knowledge from scientific fields such as computer science, electrical engineering, and mechanical engineering, as well as applied mathematics and management.
                                        <div className="flex pr-3 third-section-about-education-accordion-body" style={{
                                            marginTop: "20px",
                                            color: "#9e1a25"
                                        }}>
                                            <a href="https://www.isep.ipp.pt/Course/Course/53" target="_blank">
                                                View Courses <ArrowRightCircle size={25}></ArrowRightCircle>
                                            </a>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className='third-section-about-education-accordion'>
                                            <img src="/about/isep_wordmark_vintage.png" alt="ISEP Logo" />
                                            <div>
                                                <h3>Master's in Informatics Engineering - Software Engineering</h3>
                                                <div>
                                                    Instituto Superior de Engenharia do Porto
                                                    <div>
                                                        2021 - Present
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        The Informatics Engineering Masters is cross-cutting across all fields of activity and serves as the foundation for building the future. It enables the development of advanced computer solutions in various areas of activity, such as e-commerce, healthcare, environment, insurance, banking, transportation, sports, gaming, economy, and social networks.
                                        <div className="flex pr-3 third-section-about-education-accordion-body" style={{
                                            marginTop: "20px",
                                            color: "#9e1a25"
                                        }}>
                                            <a href="https://www.isep.ipp.pt/Course/Course/87" target="_blank">
                                                View Courses <ArrowRightCircle size={25}></ArrowRightCircle>
                                            </a>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="third-section-about-publications">
                        <h2>
                            {`Publications`}
                        </h2>
                        <div>
                            <Card className="text-center" style={{
                                borderRadius: "20px",
                                color: "rgba(0,0,0,0.5)"
                            }}>
                                <Card.Header>Download PDF</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{
                                        color: "#9e1a25",
                                        marginBottom: "20px"
                                    }}>Automation of budgetary processes in the industrial refrigeration sector</Card.Title>
                                    <Card.Text>
                                    Simpósio de Engenharia Informática, ISEP
                                    </Card.Text>
                                    <Button style={{
                                        display: "flex",
                                        marginTop: "30px",
                                        color: "#9e1a25",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }} variant='primary' onClick={() => {
                                        window.open('/about/SEI21_paper_23.pdf', '_blank');
                                    }}>
                                        <ArrowDownCircleFill size={20} style={{
                                            marginRight: "5px"
                                        }}></ArrowDownCircleFill>
                                        Download PDF
                                    </Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2021</Card.Footer>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}