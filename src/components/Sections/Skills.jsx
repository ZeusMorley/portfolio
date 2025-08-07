import React from 'react';
import './Skills.css';
import iconMap, { technologies, tools } from '../Lists';

const Skills = () => {
    return (
        <div className="skills-container" id="skills">
            <div className="skills-title">
                What I have worked with
            </div>

            <div className="technologies-title">
                Technologies
            </div>

            <div className="technologies-container">
                {technologies.map((item, index) => {
                    const Icon = iconMap[item.icon_name];
                    
                    return (
                        <div key={index} className="tech">
                            {Icon && <Icon/>}
                            {item.name}
                        </div>
                    );
                })}
            </div>

            <div className="tools-title">
                Tools
            </div>

            <div className="tools-container">
                {tools.map((item, index) => {
                    const Icon = iconMap[item.icon_name];
                    
                    return (
                        <div key={index} className="tool">
                            {Icon && <Icon/>}
                            {item.name}
                        </div>
                    );
                })}
            </div>

        </div>
    );
}


export default Skills;