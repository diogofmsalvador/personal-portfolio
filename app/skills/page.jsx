import React from 'react';
import { FirstSection } from './first-section/first-section';
import { SecondSection } from './second-section/second-section';
import { ThirdSection } from './third-section/third-section';

export default async function Skills() {
    return (
        <div className="container">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}