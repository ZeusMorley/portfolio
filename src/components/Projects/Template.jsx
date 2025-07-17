import React from 'react';
import './Project.css';

export default function ProjectTemplate({
  title,
  topic = [],
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

      {topic.length > 0 && (
        <div className="project__topics">
          {topic.join(' ')}
        </div>
      )}

			{technologies.length > 0 && (
					<div className="project__technologies">
					{technologies.join(' ')}
					</div>
			)}

			{description && (
			<p className="project__description">{description}</p>
			)}

			{contribution && (
			<p className="project__contribution">{contribution}</p>
			)}
			
			{insights && (
			<p className="project__insights">{insights}</p>
			)}

      {highlights.length > 0 && (
        <ul className="project__highlights">
          {highlights.map((point, index) => (
            <li key={index} className="project__highlight-item">
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className="project__buttons">
        {repoLink && (
          <a href={repoLink} className="project__button" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        )}
        {demoLink && (
          <a href={demoLink} className="project__button" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {paperLink && (
          <a href={paperLink} className="project__button" target="_blank" rel="noopener noreferrer">
            Read Paper
          </a>
        )}
      </div>
    </div>
  );
}
