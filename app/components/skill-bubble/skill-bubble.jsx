import React, { useEffect, useRef } from "react";

import "./skill-bubble.css";
import CircleType from 'circletype';

export default function SkillBubble({
    skillName,
    skillId,
    skillNameTransform,
    skillRateTransform,
    skillMultiplier,
    skillRateMultiplier,
    skillDirection,
    skillRate
}) {

    let skillRateString = "⭐︎".repeat(skillRate);

    const skillInstance = useRef();

    const rateInstance = useRef();

    useEffect(() => {
        const skillWidth = document.getElementById(skillId).offsetWidth;

        console.log(skillWidth);

        new CircleType(skillInstance.current).dir(skillDirection).radius(skillWidth/2 * skillMultiplier).forceWidth(skillWidth/4);
        new CircleType(rateInstance.current).dir(-skillDirection).radius(skillWidth/2 * skillRateMultiplier).forceWidth(skillWidth/4);

        document.getElementById(skillId + '-text').style.transform = skillNameTransform;
        document.getElementById(skillId + '-rate').style.transform = skillRateTransform;
    }, []);

    return (
        <div className='first-section-skills-center-absolute'>
            <div id={skillId} className={skillId}>
                <h3 id={skillId + '-text'} ref={skillInstance}>
                    {skillName}
                </h3>
                <h4 id={skillId + '-rate'} ref={rateInstance}>
                    {skillRateString}
                </h4>
            </div>
        </div>
    );
}