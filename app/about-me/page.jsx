import React from 'react';
import { FirstSection } from './first-section/first-section';
import { SecondSection } from './second-section/second-section';

export default async function AboutMe() {
    return (
        <div className="container">
            <FirstSection/>
            <SecondSection/>
        </div>
    )
}