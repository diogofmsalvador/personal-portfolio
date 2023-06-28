import React from 'react';

import "./work-card.css";

export const WorkCard = ({workplace, title, information, start_date, end_date, primary_color, secondary_color}) => {
    return (
        <div className="second-section-about-work-card" style={
            {
                background: `linear-gradient(90deg, ${primary_color} 0%, ${secondary_color} 100%)`
            }
        }>
            <div className='second-section-about-work-card-header'>
                <h3>
                    {workplace}
                </h3>
            </div>
            <div className='second-section-about-work-card-content'> 
                <h4 style={{
                    color: `${primary_color}`
                }}>
                    {title}
                </h4>
                <p style={
                    {
                        marginBottom: "20px"
                    }
                }>
                    {information}
                </p>
                <div className='second-section-about-work-card-timeline-labels'>
                    <p style={{
                        float: "left"
                    }}>
                        Start Date
                    </p>
                    <p style={{
                        float: "right"
                    }}>
                        End Date
                    </p>
                </div>
                <div className='second-section-about-work-card-timeline' style={{
                    background: `linear-gradient(90deg, ${primary_color} 0%, ${secondary_color} 100%)`,
                    transition: "all 0.5s ease-in-out"
                }}></div>
                <div className='second-section-about-work-card-timeline-labels' style={
                    {
                        marginTop: "3px"
                    }
                }>
                    <p className='second-section-about-work-card-timeline-labels-dates' style={{
                        float: "left",
                        color: `${secondary_color}`
                    }}>
                        {start_date}
                    </p>
                    <p className='second-section-about-work-card-timeline-labels-dates' style={{
                        float: "right",
                        color: `${primary_color}`
                    }}>
                        {end_date}
                    </p>
                </div>
            </div>
        </div>
    )
}