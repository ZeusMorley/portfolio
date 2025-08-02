import React, { useState } from 'react';
import './Experience.css';
import { projects } from '../Projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Experience = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    return (
        <div className="experience-container" id="experience">
             <div className="experience-title">
                My Projects
            </div>
            <div className="experience-contents">
                <div className="left-side">
                    <div className="project-list-container">
                        <button onClick={goToPrevious} className="nav-button">
                            <ChevronLeft />
                        </button>

                        <div className="project-title-container">
                            <div className="project-title-active">
                                {projects[currentIndex].title}
                            </div>

                            <div className="project-topics-active">
                                {projects[currentIndex].topics.map((topic, index) => (
                                    <div key={index} className="project-topic">
                                        {topic}
                                    </div>
                                ))}
                            </div>
                            
                        </div>

                        <button onClick={goToNext} className="nav-button">
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                <div className="right-side">
                    <div className="project-details-container">
                        {projects[currentIndex].component}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;