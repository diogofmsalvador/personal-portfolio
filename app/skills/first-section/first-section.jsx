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

                    <SkillBubble skillName="Front-End Web Developer" skillId="first-section-skills-center-one" skillTransform="translate(-3.23vw, -3.72vw) rotate(-40deg)" skillMultiplier={1.33} skillDirection={1} />
                    <SkillBubble skillName="Back-End Web Developer" skillId="first-section-skills-center-two" skillTransform="translate(3.2vw, -3.83vw) rotate(40deg)" skillMultiplier={1.3} skillDirection={1} />

                    <SkillBubble skillName="Security Auditor" skillId="skill-zero" skillTransform="translate(-1.6vw, -2.85vw) rotate(-30deg)" skillMultiplier={1.4} skillDirection={1} />
                    <SkillBubble skillName="Mobile Developer" skillId="skill-one" skillTransform="translate(1.5vw, -3.9vw) rotate(20deg)" skillMultiplier={1.35} skillDirection={1} />
                    <SkillBubble skillName="SEO" skillId="skill-two" skillTransform="translate(-0.8vw, -3.15vw) rotate(-15deg)" skillMultiplier={1.35} skillDirection={1} />
                    <SkillBubble skillName="Infrastructure Developer" skillId="skill-three" skillTransform="translate(1.75vw, -2.9vw) rotate(30deg)" skillMultiplier={1.35} skillDirection={1} />
                    <SkillBubble skillName="SCRUM" skillId="skill-four" skillTransform="translate(2.3vw, -3.2vw) rotate(35deg)" skillMultiplier={1.35} skillDirection={1} />
                    <SkillBubble skillName="Database Designer" skillId="skill-five" skillTransform="translate(2.85vw, 3.4vw) rotate(-40deg)" skillMultiplier={1.25} skillDirection={-1} />
                    <SkillBubble skillName="Systems Architecture" skillId="skill-six" skillTransform="translate(1.45vw, -2.45vw) rotate(30deg)" skillMultiplier={1.4} skillDirection={1} />
                    <SkillBubble skillName="Microservice Developer" skillId="skill-seven" skillTransform="translate(-1.3vw, -3.45vw) rotate(-20deg)" skillMultiplier={1.35} skillDirection={1} />
                    <SkillBubble skillName="Testing" skillId="skill-eight" skillTransform="translate(0.8vw, -3vw) rotate(15deg)" skillMultiplier={1.5} skillDirection={1} />
                    <SkillBubble skillName="Automation Developer" skillId="skill-nine" skillTransform="translate(-1.83vw, -3.15vw) rotate(-30deg)" skillMultiplier={1.35} skillDirection={1} />
                    <SkillBubble skillName="Quality Reporting" skillId="skill-ten" skillTransform="translate(-1.8vw, -2.6vw) rotate(-35deg)" skillMultiplier={1.4} skillDirection={1} />
                    <SkillBubble skillName="DevOps" skillId="skill-eleven" skillTransform="translate(-3.05vw, 4.05vw) rotate(38deg)" skillMultiplier={1.25} skillDirection={-1} />

                    <h2 className='first-section-skills-subtitle' ref={secondCircleInstance}>
                        {`● Software Developer ●`}
                    </h2>
                </Row>
            </Container>
        </section>
    )
}