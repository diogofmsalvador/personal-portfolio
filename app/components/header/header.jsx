"use client"

import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import './header.css';
import { Linkedin, List, X } from 'react-bootstrap-icons';

export const Header = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => setIsNavOpen(!isNavOpen);
  
    const printNavStatus = () => {
        if (isNavOpen) {
            console.log("showing");
        } else {
            console.log("not showing");
        }
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const navLinks = (className) => {
      if (className === 'nav-desktop-1') {
        return (      
          <Nav className={className}  style={{
            width: "50%",
            justifyContent: "center",
            whiteSpace: "nowrap"
          }}>
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="/about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'}>About Me</Nav.Link>
            <Nav.Link href="/skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
          </Nav>
        )
      } else if (className === 'nav-desktop-2') {
        return (
          <Nav className={className}  style={{
            width: "50%",
            justifyContent: "center",
            whiteSpace: "nowrap"
          }}>
            <Nav.Link href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
            <Nav.Link href="/services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}>Services</Nav.Link>
            <Nav.Link href="/contacts" className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'}>Contacts</Nav.Link>
          </Nav>
        )
      } else {
        return (
          <Nav className={className}  style={{
            width: "50%",
            whiteSpace: "nowrap"
          }}>
            <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="/about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'}>About Me</Nav.Link>
            <Nav.Link href="/skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
            <Nav.Link href="/services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}>Services</Nav.Link>
            <Nav.Link href="/contacts" className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'}>Contacts</Nav.Link>
          </Nav>
        )
      }
    }

    return (
        <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${isNavOpen ? "navbar-open" : ""}`} expanded={isNavOpen} onToggle={handleNavToggle}>
            <Container>
                {navLinks("nav-desktop-1")}
                <span className="navbar-text github-span">
                    <div className="social-icon">
                        <a href="#">
                          <img src="/img/github-icon.svg" alt="" />
                        </a>
                    </div>
                </span>
                <Navbar.Brand href="/" className='flex items-center brand-style'>
                    <img src="/img/logo.svg" alt="Logo" />
                </Navbar.Brand>
                <span className="navbar-text linkedin-span">
                    <div className="social-icon">
                        <a href="#">
                          <img src="/img/linkedin-icon.svg" alt="" />
                        </a>
                    </div>
                </span>
                {navLinks("nav-desktop-2")}
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={printNavStatus}>
                  <List
                    color="white"
                    size={30}
                    style={{
                      display: isNavOpen ? "none" : "block"
                    }}
                  />
                  <X 
                    color="white"
                    size={30}
                    style={{
                      display: isNavOpen ? "block" : "none"
                    }}
                  />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    {navLinks("nav-mobile")}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}