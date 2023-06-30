"use client"

import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

import "./first-section.css"
import { Container, Row } from 'react-bootstrap';
import SkillBubble from '@/app/components/skill-bubble/skill-bubble';

export const FirstSection = () => {

    const circleInstance = useRef();
    const secondCircleInstance = useRef();

    useEffect(() => {
        const mainSphereWidth = document.getElementById('first-section-skills-center').offsetWidth;
        new CircleType(circleInstance.current).radius(mainSphereWidth / 2 + 50);
        new CircleType(secondCircleInstance.current).dir(-1).radius(mainSphereWidth / 2 + 50);
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
                            <div className='first-section-skills-center-content'>
                                <div>
                                    <p>
                                        I'm a passionate and dedicated Software Developer, proficient in designing, coding, testing, and maintaining software systems. I harness a blend of technical skills, creative vision, and strategic problem-solving abilities to deliver engaging, user-centric solutions in a rapidly evolving technological landscape.
                                    </p>
                                    <p style={{
                                        marginTop: "1rem"
                                    }}>
                                        Explore my skill spheres to delve into my technical expertise.
                                    </p>

                                    <p style={{
                                        marginTop: "1rem"
                                    }}>
                                        For the freshest insights into my capabilities, visit my LinkedIn skills showcase.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='first-section-skills-center-absolute' style={{
                        zIndex: 10
                    }}>
                        <div className='first-section-skills-social'>
                            <a id="linkedin-social" href='' className="social-buttons">
                                <div>
                                    <img src="/img/linkedin-icon.svg" alt="Diogo Salvador's LinkedIn Page" style={{
                                        width: "30px",
                                        height: "30px",
                                        marginRight: "10px",
                                        transform: "translateY(-5px)"
                                    }} /> @diogofmsalvador
                                </div>
                            </a>
                        </div>
                    </div>

                    <SkillBubble
                        skillName="Front-End Web Developer"
                        skillId="first-section-skills-center-one"
                        skillNameTransform="translate(-3.23vw, -3.72vw) rotate(-40deg)"
                        skillRateTransform="translate(4.9vw, -3.72vw) rotate(-40deg)"
                        skillMultiplier={1.33}
                        skillRateMultiplier={1.33}
                        skillDirection={1}
                        skillRate={5}
                    />

                    <SkillBubble
                        skillName="Back-End Web Developer"
                        skillId="first-section-skills-center-two"
                        skillNameTransform="translate(3.2vw, -3.83vw) rotate(40deg)"
                        skillRateTransform="translate(-2.8vw, -2.05vw) rotate(40deg)"
                        skillMultiplier={1.3}
                        skillRateMultiplier={1.3}
                        skillDirection={1}
                        skillRate={5}
                    />

                    <SkillBubble
                        skillName="Security Auditor"
                        skillId="skill-zero"
                        skillNameTransform="translate(-1.6vw, -2.85vw) rotate(-30deg)"
                        skillRateTransform="translate(1.55vw, -1.8vw) rotate(-30deg)"
                        skillMultiplier={1.4}
                        skillRateMultiplier={1.4}
                        skillDirection={1}
                        skillRate={4}
                    />
                    <SkillBubble
                        skillName="Mobile Developer"
                        skillId="skill-one"
                        skillNameTransform="translate(1.5vw, -3.9vw) rotate(20deg)"
                        skillRateTransform="translate(-0.6vw, -0.7vw) rotate(20deg)"
                        skillMultiplier={1.35}
                        skillRateMultiplier={1.35}
                        skillDirection={1}
                        skillRate={3}
                    />
                    <SkillBubble
                        skillName="SEO"
                        skillId="skill-two"
                        skillNameTransform="translate(-0.8vw, -3.15vw) rotate(-15deg)"
                        skillRateTransform="translate(-0.7vw, -2.9vw) rotate(-15deg)"
                        skillMultiplier={1.35}
                        skillRateMultiplier={1.55}
                        skillDirection={1}
                        skillRate={5}
                    />
                    <SkillBubble
                        skillName="Infrastructure Developer"
                        skillId="skill-three"
                        skillNameTransform="translate(1.75vw, -2.9vw) rotate(30deg)"
                        skillRateTransform="translate(-2.15vw, -1.8vw) rotate(30deg)"
                        skillMultiplier={1.35}
                        skillRateMultiplier={1.35}
                        skillDirection={1}
                        skillRate={4}
                    />
                    <SkillBubble
                        skillName="SCRUM"
                        skillId="skill-four"
                        skillNameTransform="translate(2.3vw, -3.2vw) rotate(35deg)"
                        skillRateTransform="translate(-2.3vw, -1.8vw) rotate(35deg)"
                        skillMultiplier={1.35}
                        skillRateMultiplier={1.35}
                        skillDirection={1}
                        skillRate={3}
                    />
                    <SkillBubble
                        skillName="Database Designer"
                        skillId="skill-five"
                        skillNameTransform="translate(2.85vw, 3.4vw) rotate(-40deg)"
                        skillRateTransform="translate(-3.3vw, -10.2vw) rotate(-40deg)"
                        skillMultiplier={1.25}
                        skillRateMultiplier={1.4}
                        skillDirection={-1}
                        skillRate={5}
                    />
                    <SkillBubble
                        skillName="Systems Architecture"
                        skillId="skill-six"
                        skillNameTransform="translate(1.45vw, -2.45vw) rotate(30deg)"
                        skillRateTransform="translate(-2.76vw, -3vw) rotate(30deg)"
                        skillMultiplier={1.4}
                        skillRateMultiplier={1.4}
                        skillDirection={1}
                        skillRate={5}
                    />

                    <SkillBubble
                        skillName="Microservice Developer"
                        skillId="skill-seven"
                        skillNameTransform="translate(-1.3vw, -3.45vw) rotate(-20deg)"
                        skillRateTransform="translate(1.2vw, -2vw) rotate(-20deg)"
                        skillMultiplier={1.35}
                        skillRateMultiplier={1.35}
                        skillDirection={1}
                        skillRate={5}
                    />
                    <SkillBubble
                        skillName="Testing"
                        skillId="skill-eight"
                        skillNameTransform="translate(0.8vw, -3vw) rotate(15deg)"
                        skillRateTransform="translate(-1.9vw, -2.5vw) rotate(15deg)"
                        skillMultiplier={1.5}
                        skillRateMultiplier={1.6}
                        skillDirection={1}
                        skillRate={4}
                    />
                    <SkillBubble
                        skillName="Automation Developer"
                        skillId="skill-nine"
                        skillNameTransform="translate(-1.83vw, -3.15vw) rotate(-30deg)"
                        skillRateTransform="translate(2.5vw, -2.1vw) rotate(-30deg)"
                        skillMultiplier={1.35}
                        skillRateMultiplier={1.45}
                        skillDirection={1}
                        skillRate={4}
                    />
                    <SkillBubble
                        skillName="Quality Reporting"
                        skillId="skill-ten"
                        skillNameTransform="translate(-1.8vw, -2.6vw) rotate(-35deg)"
                        skillRateTransform="translate(2.6vw, -1.9vw) rotate(-35deg)"
                        skillMultiplier={1.4}
                        skillRateMultiplier={1.4}
                        skillDirection={1}
                        skillRate={3}
                    />
                    <SkillBubble
                        skillName="DevOps"
                        skillId="skill-eleven"
                        skillNameTransform="translate(-3.05vw, 4.05vw) rotate(38deg)"
                        skillRateTransform="translate(3.8vw, -10vw) rotate(40deg)"
                        skillMultiplier={1.25}
                        skillRateMultiplier={1.25}
                        skillDirection={-1}
                        skillRate={4}
                    />

                    <h2 className='first-section-skills-subtitle' ref={secondCircleInstance}>
                        {`● Software Developer ●`}
                    </h2>
                </Row>
            </Container>
        </section>
    )
}