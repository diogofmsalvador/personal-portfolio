"use client"

import React from 'react';
import { Col, Container } from 'react-bootstrap';

import "./project-details.css"
import PhotoGallery from '@/app/components/photo-gallery/photo-gallery';
import SkillsGallery from '@/app/components/skills-gallery/skills-gallery';

export const ProjectDetail = ({ project_info }) => {

    var project_responsabilities = project_info.responsabilities.map(item =>
        <div className='project-details-bubble-sec-li'>
            ● {item}
        </div>
    )

    var project_acheivements = project_info.acheivements.map(item =>
        <div className='project-details-bubble-sec-li'>
            ● {item}
        </div>
    )

    return (
        <section className="project-details-section" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container>
                <h1>
                    {project_info.title}
                </h1>
                <span className="tagline">
                    Role: {project_info.role}
                </span>
                <div className='projects-details-section-description'>
                    <p>
                        {project_info.description}
                    </p>
                </div>
            </Container>
            <PhotoGallery />
            <Container className='flex' style={{
                marginTop: "3rem",
                marginBottom: "1.5rem"
            }}>
                <Col xs={12} md={6} xl={6}>
                    <h1>
                        Achievements
                    </h1>
                    <div className='project-details-bubble-sec'>
                        {project_acheivements}
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <h1>
                        Responsibilities
                    </h1>
                    <div className='project-details-bubble-sec'>
                        {project_responsabilities}
                    </div>
                </Col>
            </Container>

            <h1>
                    Technologies
                </h1>
            <SkillsGallery
                    skills={project_info.technologies}
                />
        </section>
    )
}
