import React from 'react';
import {FirstSection} from "../app/home/first-section/first-section";
import { SecondSection } from './home/second-section/second-section';
import { ThirdSection } from './home/third-section/third-section';

export default async function Home() {
    return (
        <div style={{
            scrollSnapType: 'y mandatory'
        }}>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    )
}