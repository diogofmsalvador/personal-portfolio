"use client"

import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

import "./second-section.css"
import { Container, Row } from 'react-bootstrap';
import SkillBubble from '@/app/components/skill-bubble/skill-bubble';

export const SecondSection = () => {

    const circleInstance = useRef();
    const secondCircleInstance = useRef();

    useEffect(() => {
        const firstBubbleWidth = document.getElementById('second-section-skills-center').offsetWidth;
        const secondBubbleWidth = document.getElementById('third-section-skills-center').offsetWidth;
        new CircleType(circleInstance.current).radius(firstBubbleWidth / 2 + 50);
        new CircleType(secondCircleInstance.current).dir(-1).radius(secondBubbleWidth / 2 + 40);

        document.getElementById("second-section-skills-bubble").style.transform = `rotate(20deg) translateY(-11vw)`;
        document.getElementById("third-section-skills-bubble").style.transform = `rotate(-20deg) translate(-5vw, 10vw)`;

    }, []);

    return (
        <section className="section-skills" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container>
                <div className="align-items-center" style={{
                    height: "100vh",
                    display: "flex",
                    marginBottom: "100px"
                }}>
                    <div id="second-section-skills-bubble" className='second-section-skills-bubble'>
                        <h2 className='second-section-skills-title' ref={circleInstance}>
                            {`Soft Skills`}
                        </h2>
                        <div id="second-section-skills-center" className='second-section-skills-center'>
                            <div className='second-section-skills-center-shadow'>
                                <div style={{
                                    margin: "auto",
                                    width: "100%",
                                    paddingTop: "25px"
                                }}>
                                    <p style={{
                                        width: "70%"
                                    }}>
                                        I've spent my professional career developing an array of soft skills that enable me to regularly produce results that are of the highest caliber in the quick-paced world of technology.</p>
                                    <p style={{
                                        marginTop: "2rem",
                                        width: "90%"
                                    }}>
                                        I've always felt that good communication is powerful. When faced with difficulties, my problem-solving mindset kicks into high gear. </p>
                                    <p style={{
                                        marginTop: "1rem",
                                        width: "90%"
                                    }}>
                                        Adaptability is key in our ever-evolving industry. In order to stay ahead of the curve, I keep an open mind and pick up new technologies and processes rapidly. My hunger for knowledge knows no bounds.</p>
                                    <p style={{
                                        marginTop: "2rem",
                                        width: "60%"
                                    }}>
                                        In managing my projects, I skillfully juggle organization, prioritization, and resource allocation to ensure that I not only meet but exceed our objectives, delivering on time and within budget.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SkillBubble
                        skillName="Communication"
                        skillId="soft-skill-zero"
                        skillNameTransform="translate(3vw, -5vw) rotate(30deg)"
                        skillRateTransform=""
                        skillMultiplier={1.25}
                        skillRateMultiplier={1.3}
                        skillDirection={1}
                        skillRate={0}
                        images={[
                            {
                                src: "/about/skills/communication_logo.png",
                                alt: "Communication Logo - Graphics Designed By 30000011546 From <a href='https://lovepik.com/image-401496478/business-communication-icon-free-vector-illustration-material.html'>LovePik.com</a>",
                                transform: "translate(0vw, -0.5vw) scale(1.3)",
                                id: "communication-logo"
                            },
                        ]}
                    />

                    <SkillBubble
                        skillName="Adaptability"
                        skillId="soft-skill-one"
                        skillNameTransform="translate(-2.1vw, 3.9vw) rotate(30deg)"
                        skillRateTransform=""
                        skillMultiplier={1.3}
                        skillRateMultiplier={1.3}
                        skillDirection={-1}
                        skillRate={0}
                        images={[
                            {
                                src: "/about/skills/adaptability_logo.png",
                                alt: "Adaptability Logo",
                                transform: "scale(1.3)",
                                id: "adaptability-logo"
                            },
                        ]}
                    />

                    <SkillBubble
                        skillName="Creativity"
                        skillId="soft-skill-two"
                        skillNameTransform="translate(-1.7vw, -2.9vw) rotate(-30deg)"
                        skillRateTransform=""
                        skillMultiplier={1.35}
                        skillRateMultiplier={1.3}
                        skillDirection={1}
                        skillRate={0}
                        images={[
                            {
                                src: "/about/skills/creativity_logo.png",
                                alt: "Creativity Logo",
                                transform: "scale(1.3)",
                                id: "creativity-logo"
                            },
                        ]}
                    />

                    <div id="third-section-skills-bubble" className='third-section-skills-bubble'>
                        <div id="third-section-skills-center" className='third-section-skills-center'>
                            <div className='third-section-skills-center-shadow'>
                                <div style={{
                                    margin: "auto",
                                    paddingBottom: "1.5vw"
                                }}>
                                    <p style={{
                                        width: "60%",
                                    }}>
                                        I'm proficient in a range of programming languages including VBA, C++, C, HTML, CSS, TypeScript, and Scala, which allow me to work flexibly across different projects and platforms.
                                    </p>
                                    <p style={{
                                        marginTop: "1rem",
                                        width: "90%",
                                    }}>
                                        My comfortability with tools like Microsoft Excel and Latex further enhances my ability to manage data and create structured documents.</p>
                                    <p style={{
                                        marginTop: "1rem",
                                        width: "75%",
                                    }}>
                                        Beyond these, my expertise extends to multimedia editing and production with tools like Adobe Premiere and Adobe Photoshop, and I also have a knack for drawing and designing.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <h2 className='third-section-skills-subtitle' ref={secondCircleInstance}>
                            {`Other Skills`}
                        </h2>
                    </div>

                    <SkillBubble
                        skillName="Time Management"
                        skillId="soft-skill-three"
                        skillNameTransform="translate(-2.5vw, -4.5vw) rotate(-30deg)"
                        skillRateTransform=""
                        skillMultiplier={1.25}
                        skillRateMultiplier={1.3}
                        skillDirection={1}
                        skillRate={0}
                        images={[
                            {
                                src: "/about/skills/time_logo.png",
                                alt: "Time Management Logo",
                                transform: "scale(1.3)",
                                id: "time-management-logo"
                            },
                        ]}
                    />

                    <SkillBubble
                        skillName="Attention to detail"
                        skillId="soft-skill-four"
                        skillNameTransform="translate(2vw, 3.5vw) rotate(-30deg)"
                        skillRateTransform=""
                        skillMultiplier={1.3}
                        skillRateMultiplier={1.3}
                        skillDirection={-1}
                        skillRate={0}
                        images={[
                            {
                                src: "/about/skills/details_logo.png",
                                alt: "Details Logo",
                                transform: "scale(1.3)",
                                id: "details-logo"
                            },
                        ]}
                    />

                    <SkillBubble
                        skillName="Commitment"
                        skillId="soft-skill-five"
                        skillNameTransform="translate(1.67vw, -2.8vw) rotate(30deg)"
                        skillRateTransform=""
                        skillMultiplier={1.4}
                        skillRateMultiplier={1.3}
                        skillDirection={1}
                        skillRate={0}
                        images={[
                            {
                                src: "/about/skills/commitment_logo.png",
                                alt: "Commitment Logo",
                                transform: "scale(1.3)",
                                id: "commitment-logo"
                            },
                        ]}
                    />

                </div>
            </Container>
        </section>
    )
}