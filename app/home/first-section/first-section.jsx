"use client";

import React from "react"
import { useCallback } from "react"
import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

import "./first-section.css"
import { BackgroundParticles } from "@/app/components/particles/particles";

export const FirstSection = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Freelancer"];
    const [txt, setTxt] = useState("");
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [txt])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullTxt = toRotate[i];

        let updatedText = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);

        setTxt(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullTxt) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum  + 1);
            setDelta(300);
        }
    }

    return (
        
        <section className="banner" id="home" style={{
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "center"
        }}>
            <Container>
                <Row className="align-items-center" style={{
                    height: "100vh"
                }}>
                    <Col xs={12} md={6} xl={7}>
                            <div>
                                <span className="tagline">
                                    Welcome Innovation
                                </span>
                                <h1>
                                    {`Unleashing Digital Solutions, Empowering Success.`}
                                </h1>
                                <p>
                                    As a passionate and dedicated freelancer, growing a brand new software agency, I am your go-to expert for all things digital. I work diligently to realize your ideas with accuracy and originality thanks to my dedication to excellence and track record of success.  I'm here to bring your vision to life, whether it be through appealing website designs or seamless software development.
                                </p>
                                <div className="flex pr-3">
                                    <button onClick={() => { console.log("connect") }}>About Me <ArrowRightCircle size={25}></ArrowRightCircle></button>
                                    <button onClick={() => { console.log("connect") }}>Contact Me <ArrowRightCircle size={25}></ArrowRightCircle></button>
                                </div>
                            </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src="/img/first-section-img.png" alt="Header Img" />
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}