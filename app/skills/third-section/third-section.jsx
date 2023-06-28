"use client"

import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

import "./third-section.css"
import { Container, Row } from 'react-bootstrap';

export const ThirdSection = () => {

    const circleInstance = useRef();

    const secondCircleInstance = useRef();

    useEffect((value) => {
        const width = document.getElementById('third-section-skills-center').offsetWidth;
        new CircleType(circleInstance.current).radius(width / 2 + 40);
        new CircleType(secondCircleInstance.current).dir(-1).radius(width / 2 + 40);

        document.getElementById("third-section-skills-bubble").style.transform = `translateX(25vw) rotate(-20deg)`;
    }, []);

    return (
        <section className="third-section-skills" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container>
                <Row className="align-items-center" style={{
                    height: "100vh"
                }}>
                    <div id="third-section-skills-bubble">
                        <h2 className='third-section-skills-title' ref={circleInstance}>
                            {`My Skills`}
                        </h2>
                        <div id="third-section-skills-center" className='third-section-skills-center'>
                            <div className='third-section-skills-center-shadow'>
                            </div>
                        </div>
                        <h2 className='third-section-skills-subtitle' ref={secondCircleInstance}>
                            {`Infrastructure Engineer`}
                        </h2>
                    </div>
                </Row>
            </Container>
        </section>
    )
}