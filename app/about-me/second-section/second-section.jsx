"use client"

import React from 'react';

import "./second-section.css"
import { Container } from 'react-bootstrap';
import { WorkCard } from '@/app/components/work-card/work-card';

export const SecondSection = () => {
    return (
        <section className="second-section-about" style={{
            position: "relative",
            zIndex: 1
        }}>
            <Container className="align-items-center">
                <h2>
                    {`Work Experience`}
                </h2>
                <div className='second-section-about-work'>
                    <div className='second-section-about-right'>
                        <WorkCard
                            workplace="Deloitte Delivery Center"
                            title="Junior Programmer"
                            information="Created and implemented request-handling automated scripts using programming languages such as Python. These scripts improved the response time of each request and fixed possible human-made errors that were common before this automation was implemented. Development of an infrastructure platform using Amazon Web Services (AWS) services, such as Step Functions, Lambda, Cloudwatch, and more. Analysis of a complete infrastructure with four environments and using EKS service (Kubernetes). Worked with a team of people from multiple countries, primarily Germany and Portugal, and spoke to them in English with ease regularly."
                            start_date="September 2021"
                            end_date="August 2022"
                            primary_color="rgba(134,176,73,1)"
                            secondary_color="rgba(67,102,17,1)"
                        />
                    </div>
                    <div className='second-section-about-left'>
                        <WorkCard
                            workplace="Freelancer"
                            title="Software Engineer"
                            information="Started freelancing because I wanted new challenges and opportunities to learn about new, more modern, technologies that are being used in the industry.
                                Developed a website from start to finish for H-FRIO Lda., a company from Serzedo, Vila Nova de Gaia, focused on providing services for the cold storage industry. The company allowed me to analyze and automate the most critical services to improve their business success. The website is now online at h-frio.pt, and allows potential customers to request a budget for standard or custom cold storage facilities, learn more about the company, and contact them."
                            start_date="November 2022"
                            end_date="Present"
                            primary_color="rgba(13,71,133,1)"
                            secondary_color="rgba(76,174,255,1)"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}