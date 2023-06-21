"use client";

import React from 'react';

import { Container, Row } from "react-bootstrap"
import { useState } from "react"

import Tilt from 'react-parallax-tilt';
import { ArrowRightCircle } from "react-bootstrap-icons"

import "./second-section.css"

const services = [
    {
      title: "Web Development",
      icon: '/icons/code-circle-svgrepo-com.svg',
      services: [
        'Front-end Web Development',
        'Back-end Web Development',
        'Full-stack Web Development',
        'and more...'
      ]
    },
    {
      title: "Infrastructure Engineering",
      icon: '/icons/cloud-plus-1055-svgrepo-com.svg',
      services: [
        'Cloud Computing',
        'DevOps',
        'Infrastructure Automation',
        'and more...'
      ]
    },
    {
      title: "Security Auditor",
      icon: '/icons/security-user-svgrepo-com.svg',
      services: [
        'Web Application Security',
        'Network Security',
        'and more...'
      ]
    },
    {
      title: "SEO Specialist",
      icon: '/icons/seo-svgrepo-com.svg',
      services: [
        'Search Engine Optimization',
        'SEO Audits',
        'and more...'
      ]
    },
  ];

  const TiltScale = ({ index, title, icon, services }) => {

    const [scale, setScale] = useState(1.35);
  
    return (
      <Tilt scale={scale} transitionSpeed={2500} className='service-card'>
        <div className="tilt-scale">
          <div className="header">
            <div className='service-card-img'>
              <img src={icon} alt={title} />
            </div>
            <h6>{title}</h6>
          </div>
          <hr/>
          <div className="service-card-p">
            {
              services.map((service, index) => (
                <p key={index}>{service}</p>
              ))
            }
          </div>
        </div>  
      </Tilt>
    );
  };

export const SecondSection = () => {
    return (
        <section className="second-section" id="home" style={{
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "center"
        }}>
            <Container>
                <Row className="align-items-center justify-content-center">
                    <h2>
                        {`Unveiling Possibilities, Exceeding Expectations`}
                    </h2>
                    <div className='flex'>
                    {services.map((service, index) => (
                        <TiltScale key={service.title}  {...service} />
                        ))}
                    </div>
                    <p style={{marginTop: "40px", color: "white", fontSize: "14px"}}>
                      With a deep understanding of the ever-evolving digital ecosystem, we specialize in delivering cutting-edge solutions that drive engagement and maximize your online impact. 
                      Whether you're launching a new venture or seeking to revitalize your existing online presence, my comprehensive suite of service offerings is designed to fuel your success.
                    </p>
                    <div className="flex pr-3 service-card-button">
                      <button onClick={() => { console.log("connect") }} style={{marginLeft: "auto", marginRight: "auto", marginTop: "30px"}}>See More Services <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </div>
                </Row>
            </Container>
        </section>
    )
}