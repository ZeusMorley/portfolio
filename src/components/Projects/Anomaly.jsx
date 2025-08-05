import ProjectTemplate from './Template';

export const ANOMALY_TITLE = "Anomaly Detection";
export const ANOMALY_TOPICS = ['Data Mining'];
export const ANOMALY_TECHNOLOGIES = ['Python'];

const ANOMALY_DESCRIPTION = "Description"
const JEEPILI_HIGHLIGHTS = [
  "Highlight 1",
  "Highlight 2 "
]

const ANOMALY_CONTRIBUTION = "Contribution/Actions"

const ANOMALY_INSIGHTS = "Insights"

export default function Anomaly() {
  return (
    <ProjectTemplate
    title={ANOMALY_TITLE}
    topics = {ANOMALY_TOPICS}
    technologies = {ANOMALY_TECHNOLOGIES}
    description= {ANOMALY_DESCRIPTION}
    highlights = {JEEPILI_HIGHLIGHTS}
    contribution= {ANOMALY_CONTRIBUTION}
    insights= {ANOMALY_INSIGHTS}
    repoLink= "https://github.com"
    demoLink= "https://github.com"
    paperLink= "https://github.com"
    />
  );
}
