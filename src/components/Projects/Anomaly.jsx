import ProjectTemplate from './Template';

export const ANOMALY_TITLE = "Anomaly Detection";

export default function Anomaly() {
  return (
    <ProjectTemplate
    title={ANOMALY_TITLE}
    topic = {['DM']}
    technologies = {['Python']}
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
