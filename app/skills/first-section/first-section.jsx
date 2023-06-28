"use client"

import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

import "./first-section.css"
import { Container, Row } from 'react-bootstrap';

export const FirstSection = () => {

    const circleInstance = useRef();

    const secondCircleInstance = useRef();

    useEffect((value) => {
        const width = document.getElementById('first-section-skills-center').offsetWidth;
        new CircleType(circleInstance.current).radius(width / 2 + 50);
        new CircleType(secondCircleInstance.current).dir(-1).radius(width / 2 + 50);
    }, []);

    return (
        <section className="first-section-skills" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container>
                <Row className="align-items-center" style={{
                    height: "100vh"
                }}>
                    <h2 className='first-section-skills-title' ref={circleInstance}>
                        {`● Skills ●`}
                    </h2>
                    <div id='first-section-skills-center' className='first-section-skills-center'>
                        <div className='first-section-skills-center-shadow'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='first-section-skills-center-one'>

                        </div>
                    </div>

                    <div className='first-section-skills-center-absolute'>
                        <div className='first-section-skills-center-two'>

                        </div>
                    </div>

                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-one'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-two'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-three'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-four'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-five'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-six'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-seven'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-eight'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-nine'>

                        </div>
                    </div>
                    <div className='first-section-skills-center-absolute'>
                        <div className='skill-ten'>

                        </div>
                    </div>

                    <h2 className='first-section-skills-subtitle' ref={secondCircleInstance}>
                        {`● Software Developer ●`}
                    </h2>
                </Row>
            </Container>
        </section>
    )
}