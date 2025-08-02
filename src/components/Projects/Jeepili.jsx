import ProjectTemplate from './Template';

export const JEEPILI_TITLE = "Jeepili";
export const JEEPILI_TOPICS = ['Mobile', 'Android'];

export default function Jeepili() {
  return (
    <ProjectTemplate
    title={JEEPILI_TITLE}
    topic = {JEEPILI_TOPICS}
    technologies = {['React']}
    description= "Description"
    highlights = {['Highlight 1', 'Highlight 2', 'Highlight 3']}
    contribution= "Contribution"
    insights= "Insights"
    repoLink= "https://github.com"
    demoLink= "https://github.com"
    paperLink= "https://github.com"
    />
  );
}
