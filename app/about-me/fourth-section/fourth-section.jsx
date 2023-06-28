"use client";

import React from 'react';
import Slider from "react-slick";

import "./fourth-section.css"
import { Container, Row } from 'react-bootstrap';
import SimpleSlider from '../../components/certificate-carousel/simple-slider';

export const FourthSection = () => {
    return (
        <section className="fourth-section-about" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container className="align-items-center">
                <h2>
                    {`Certifications & Courses`}
                </h2>
                <div className='fourth-section-about-certificates'>
                    <SimpleSlider/>
                </div>
            </Container>
        </section>
    )
};