import React from 'react';
import { FirstSection } from './first-section/first-section';
import { SecondSection } from './second-section/second-section';
import { ThirdSection } from './third-section/third-section';
import { FourthSection } from './fourth-section/fourth-section';

export default async function AboutMe() {
    return (
        <div className="container">
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
        </div>
    )
}