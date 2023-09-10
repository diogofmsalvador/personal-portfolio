"use client"

import React, { useEffect, useRef } from 'react';

import "./first-section.css"
import { Col, Container, Row } from 'react-bootstrap';
import { CategoryItem } from '@/app/components/category-item/category-item';
import { ProjectItem } from '@/app/components/project-item/project-item';

import { all_projects } from "../../globals.js";

var project_card = all_projects.projects.map(item =>
        <ProjectItem
            title={item.title}
            smallDescription={item.smallDescription}
            category={item.role}
            backgrounds={item.backgrounds}
            images={'https://via.placeholder.com/150'}
            date={item.duration}
        />
    );

export const FirstSection = () => {
    return (
        <section className="first-section-projects" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container style={{
                minHeight: "100vh"
            }}>
                <h1>
                    ● Projects ●
                </h1>
                <div className='first-section-projects-contents'>
                    <Col xs={12} md={6} xl={3} className='first-section-projects-contents-left'>
                        <h3>
                            Categories
                        </h3>
                        <CategoryItem id="front-end" category="Front-End Web Development" />
                        <CategoryItem id="back-end" category="Back-End Web Development" />
                        <CategoryItem id="security" category="Security Auditor" />
                        <CategoryItem id="seo" category="Search Engine Optimization" />
                        <CategoryItem id="infrastructure" category="Infrastructure Development" />
                        <CategoryItem id="scrum" category="SCRUM" />
                        <CategoryItem id="database" category="Database Designer" />
                        <CategoryItem id="systems" category="Systems Architecture" />
                        <CategoryItem id="microservices" category="Microservices Development" />
                        <CategoryItem id="testing" category="Testing" />
                        <CategoryItem id="automation" category="Automation Development" />
                        <CategoryItem id="quality" category="Quality Reporting" />
                        <CategoryItem id="devops" category="DevOps" />
                    </Col>
                    <Col xs={12} md={6} xl={9} className='first-section-projects-contents-right'>
                        {project_card}
                    </Col>
                </div>
            </Container>
        </section>
    )
}