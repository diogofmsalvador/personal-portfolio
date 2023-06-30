import React, { useEffect, useRef } from "react";

import "./skill-bubble.css";
import CircleType from 'circletype';

export default function SkillBubble({
    skillName,
    skillId,
    skillTransform,
    skillMultiplier,
    skillDirection
}) {

    const skillInstance = useRef();

    useEffect(() => {
        const skillWidth = document.getElementById(skillId).offsetWidth;

        console.log(skillWidth);

        new CircleType(skillInstance.current).dir(skillDirection).radius(skillWidth/2 * skillMultiplier).forceWidth(skillWidth/4);
        document.getElementById(skillId + '-text').style.transform = skillTransform;
    }, []);

    return (
        <div className='first-section-skills-center-absolute'>
            <div id={skillId} className={skillId}>
                <h3 id={skillId + '-text'} ref={skillInstance}>
                    {skillName}
                </h3>
            </div>
        </div>
    );
}