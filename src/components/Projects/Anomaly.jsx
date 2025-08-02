import ProjectTemplate from './Template';

export const ANOMALY_TITLE = "Anomaly Detection";
export const ANOMALY_TOPICS = ['DM'];

export default function Anomaly() {
  return (
    <ProjectTemplate
    title={ANOMALY_TITLE}
    topic = {ANOMALY_TOPICS}
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
