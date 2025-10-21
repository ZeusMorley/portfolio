import React from 'react';
import './Project.css';

export default function ProjectTemplate({
  title,
  topics = [],
  technologies = [],
  description,
  highlights = [],
  contribution,
  insights,
  repoLink,
  demoLink,
  paperLink,
}) {
  return (
    <div className="project">
      <h3 className="project__title">{title}</h3>

      {topics.length > 0 && (
        <div className="project__topics">
          {topics.map((topic, index) => (
            <div key={index} className="topic-item">
                {topic}
            </div>
          ))}
        </div>
      )}

			{technologies.length > 0 && (
					<div className="project__technologies">
					{technologies.map((tech, index) => (
            <div key={index} className="tech-item">
                {tech}
            </div>
          ))}
					</div>
			)}

			{description && (
			<p className="project__description">{description}</p>
			)}

      {highlights.length > 0 && (
        <div className="project__highlights">
          {highlights.map((point, index) => (
            <div key={index} className="project__highlight-item">
              {point}
            </div>
          ))}
        </div>
      )}

			{contribution && (
			<p className="project__contribution">{contribution}</p>
			)}
			
			{insights && (
			<p className="project__insights">{insights}</p>
			)}

      

      <div className="project__buttons">
          <button 
            className="project__button" 
            onClick={() => window.open(repoLink, '_blank')} 
            disabled={repoLink === '' || repoLink === null}
          >
            Repository
          </button>
          <button 
            className="project__button" 
            onClick={() => window.open(demoLink, '_blank')} 
            disabled={demoLink === '' || demoLink === null}
          >
            Live Demo
          </button>
          <button 
            className="project__button" 
            onClick={() => window.open(paperLink, '_blank')} 
            disabled={paperLink === '' || paperLink === null}
          >
            Read Paper
          </button>
      </div>
    </div>
  );
}
