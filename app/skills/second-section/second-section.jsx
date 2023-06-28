"use client"

import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

import "./second-section.css"
import { Container, Row } from 'react-bootstrap';

export const SecondSection = () => {

    const circleInstance = useRef();

    const secondCircleInstance = useRef();

    useEffect((value) => {
        const width = document.getElementById('second-section-skills-center').offsetWidth;
        new CircleType(circleInstance.current).radius(width / 2 + 50);
        new CircleType(secondCircleInstance.current).dir(-1).radius(width / 2 + 50);

        document.getElementById("second-section-skills-bubble").style.transform = `translateX(-25vw) rotate(20deg)`;
    }, []);

    return (
        <section className="second-section-skills" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container>
                <Row className="align-items-center" style={{
                    height: "100vh"
                }}>
                    <div id="second-section-skills-bubble" className='second-section-skills-bubble'>
                        <h2 className='second-section-skills-title' ref={circleInstance}>
                            {`My Skills`}
                        </h2>
                        <div id="second-section-skills-center" className='second-section-skills-center'>
                            <div className='second-section-skills-center-shadow'>
                            </div>
                        </div>
                        <h2 className='second-section-skills-subtitle' ref={secondCircleInstance}>
                            {`Fullstack Web Developer`}
                        </h2>
                    </div>
                </Row>
            </Container>
        </section>
    )
}