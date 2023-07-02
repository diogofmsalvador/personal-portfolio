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
                <Row id="first-section-skills" className="align-items-center" style={{
                    height: "100vh"
                }}>
                    <h2 className='first-section-skills-title fade-in' ref={circleInstance}>
                        {`● Skills ●`}
                    </h2>
                    <div id='first-section-skills-center' className='first-section-skills-center puff-in-center'>
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
                        images={[
                            {
                                src: "/about/certificates/angular_logo.svg",
                                alt: "Angular Logo",
                                transform: "translate(-0.7vw, 2.5vw) scale(0.8)",
                                id: "angular-logo"
                            },
                            {
                                src: "/about/certificates/react_logo.png",
                                alt: "React Logo",
                                transform: "translate(2.7vw, -0.4vw) scale(0.8)",
                                id: "react-logo"
                            },
                            {
                                src: "/about/certificates/next_logo.png",
                                alt: "Next JS Logo",
                                transform: "translate(-1.7vw, -2.1vw)",
                                id: "next-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/spring_logo.png",
                                alt: "Spring Framework Logo",
                                transform: "translate(2.1vw, -2.4vw)",
                                id: "spring-logo"
                            },
                            {
                                src: "/about/certificates/python_logo.png",
                                alt: "Python Logo",
                                transform: "translate(-2.4vw, -2.4vw) scale(0.6)",
                                id: "python-logo"
                            },
                            {
                                src: "/about/certificates/net_logo.png",
                                alt: "ASP .NET Logo",
                                transform: "translate(-2.1vw, 2.4vw) scale(0.6)",
                                id: "net-logo"
                            },
                            {
                                src: "/about/certificates/java_logo.png",
                                alt: "Java Logo",
                                transform: "translate(2.4vw, 2.4vw) scale(0.8) ",
                                id: "java-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/burp_logo.png",
                                alt: "Burp Suite Logo",
                                transform: "translate(0vw,-1vw) scale(0.8)",
                                id: "burp-logo"
                            },
                            {
                                src: "/about/certificates/wireshark_logo.png",
                                alt: "Wireshark Logo",
                                transform: "translate(0vw,1.2vw) scale(0.8)",
                                id: "wireshark-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/flutter_logo.png",
                                alt: "Flutter Logo",
                                transform: "translate(0vw,1.6vw) scale(0.8)",
                                id: "flutter-logo"
                            },
                            {
                                src: "/about/certificates/android_logo.png",
                                alt: "Android Logo",
                                transform: "translate(0vw,-1.6vw) scale(0.8)",
                                id: "android-logo"
                            }
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/seo_logo.png",
                                alt: "SEO Logo",
                                transform: "scale(1.4)",
                                id: "seo-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/aws_logo.png",
                                alt: "Amazon Web Services Logo",
                                transform: "translate(0vw, 2vw) scale(0.8)",
                                id: "aws-logo"
                            },
                            {
                                src: "/about/certificates/azure_logo.png",
                                alt: "Microsoft Azure Logo",
                                transform: "translate(-1.5vw, -1.5vw) scale(0.7)",
                                id: "azure-logo"
                            },
                            {
                                src: "/about/certificates/google_cloud_logo.png",
                                alt: "Google Cloud Logo",
                                transform: "translate(2vw, -1vw) scale(1.1)",
                                id: "google-cloud-logo"
                            }
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/scrum_logo.png",
                                alt: "SCRUM Logo",
                                transform: "scale(1.3)",
                                id: "scrum-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/postegre_logo.png",
                                alt: "PostgreSQL Logo",
                                transform: "translate(-2vw,0vw) scale(0.7)",
                                id: "postgresql-logo"
                            },
                            {
                                src: "/about/certificates/mysql_logo.png",
                                alt: "MySQL Logo",
                                transform: "translate(0.9vw,-2.4vw) scale(1)",
                                id: "mysql-logo"
                            },
                            {
                                src: "/about/certificates/mongo_logo.png",
                                alt: "Mongo DB Logo",
                                transform: "translate(1vw,1vw) scale(0.8)",
                                id: "mongo-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/terraform_logo.svg",
                                alt: "Terraform Logo",
                                transform: "translate(1.5vw,1vw) scale(1)",
                                id: "terraform-logo"
                            },
                            {
                                src: "/about/certificates/systems_logo.png",
                                alt: "Systems Interaction Logo",
                                transform: "translate(01vw, -1.7vw) scale(0.7)",
                                id: "systems-logo"
                            },
                            {
                                src: "/about/certificates/google_cloud_logo.png",
                                alt: "Google Cloud Logo",
                                transform: "translate(-1.5vw, -0.75vw) scale(0.8)",
                                id: "google-cloud-2-logo"
                            },
                            {
                                src: "/about/certificates/aws_logo.png",
                                alt: "Amazon Web Services Logo",
                                transform: "translate(-0.9vw, 1.7vw) scale(0.8)",
                                id: "aws-2-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/microservice_logo.png",
                                alt: "Microservices Logo",
                                transform: "translate(2vw, 0vw) scale(0.7)",
                                id: "microservice-logo"
                            },
                            {
                                src: "/about/certificates/spring_logo.png",
                                alt: "Spring Framework Logo",
                                transform: "translate(-1vw, -2vw) scale(1)",
                                id: "spring-2-logo"
                            },
                            {
                                src: "/about/certificates/python_logo.png",
                                alt: "Python Logo",
                                transform: "translate(-1.5vw, 1.45vw) scale(0.6)",
                                id: "python-2logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/jmeter_logo.svg",
                                alt: "JMeter Logo",
                                transform: "scale(1.3)",
                                id: "jmeter-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/python_logo.png",
                                alt: "Python Logo",
                                transform: "translate(0.55vw, -1.25vw) scale(0.9)",
                                id: "python-3-logo"
                            },
                            {
                                src: "/about/certificates/lambda_logo.png",
                                alt: "AWS Lambda Logo",
                                transform: "translate(-0.55vw, 1.3vw) scale(0.9)",
                                id: "lambda-logo"
                            },
                        ]}
                    />
                    <SkillBubble
                        skillName="Quality Reporting"
                        skillId="skill-ten"
                        skillNameTransform="translate(-1.8vw, -2.6vw) rotate(-35deg)"
                        skillRateTransform="translate(2.6vw, -1.9vw) rotate(-35deg)"
                        skillMultiplier={1.45}
                        skillRateMultiplier={1.4}
                        skillDirection={1}
                        skillRate={3}
                        images={[
                            {
                                src: "/about/certificates/sonargraph_logo.png",
                                alt: "Sonargraph Explorer Logo",
                                transform: "translate(-1vw, 1vw) scale(0.8)",
                                id: "sonargraph-logo"
                            },
                            {
                                src: "/about/certificates/browserstack_logo.png",
                                alt: "BrowserStack Logo",
                                transform: "translate(1vw, -1vw) scale(0.8)",
                                id: "browserstack-logo"
                            },
                        ]}
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
                        images={[
                            {
                                src: "/about/certificates/github_actions_logo.png",
                                alt: "Github Actions Logo",
                                transform: "translate(-1.5vw, -1.5vw) scale(0.6)",
                                id: "github-actions-logo"
                            },
                            {
                                src: "/about/certificates/bitbucket_pipeline_logo.png",
                                alt: "Bitbucket Pipeline Logo",
                                transform: "translate(1.4vw, -2vw) scale(0.7)",
                                id: "bitbucket-pipeline-logo"
                            },
                            {
                                src: "/about/certificates/concourse_logo.png",
                                alt: "Concourse Logo",
                                transform: "translate(-1.5vw, 1.5vw) scale(0.6)",
                                id: "concourse-logo"
                            },
                            {
                                src: "/about/certificates/jenkins_logo.png",
                                alt: "Jenkins Logo",
                                transform: "translate(1.5vw, 1.5vw) scale(0.6)",
                                id: "jenkins-logo"
                            },
                        ]}
                    />

                    <h2 className='first-section-skills-subtitle fade-in' ref={secondCircleInstance}>
                        {`● Software Developer ●`}
                    </h2>
                </Row>
            </Container>
        </section>
    )
}