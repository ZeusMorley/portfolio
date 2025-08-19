import ProjectTemplate from './Template';

export const ANOMALY_TITLE = "Used Car Price Anomaly Detection";
export const ANOMALY_TOPICS = ['Data Mining', 'Unsupervised Learning'];
export const ANOMALY_TECHNOLOGIES = ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'];

const ANOMALY_DESCRIPTION = "I explored used‑car listings and looked for suspicious prices. I cleaned and combined the data, tried two ways to spot ‘odd’ cars, and visualized the results so they’re easy to explain.";
const ANOMALY_HIGHLIGHTS = [
  "Found listings that didn’t match the usual price vs. age/mileage pattern",
  "Compared results from two methods to see where they agree and disagree",
  "Built simple charts (2D/3D) to show why a listing looks unusual"
]

const ANOMALY_CONTRIBUTION = "I handled the data cleanup, modeled the anomalies, and created the visuals to tell a clear story about which cars stand out and why.";

const ANOMALY_INSIGHTS = "Different methods flag different kinds of ‘weird’. Blending them gives a more balanced view, and small changes to thresholds can meaningfully change what gets flagged.";

export default function Anomaly() {
  return (
    <ProjectTemplate
    title={ANOMALY_TITLE}
    topics = {ANOMALY_TOPICS}
    technologies = {ANOMALY_TECHNOLOGIES}
    description= {ANOMALY_DESCRIPTION}
    highlights = {ANOMALY_HIGHLIGHTS}
    contribution= {ANOMALY_CONTRIBUTION}
    insights= {ANOMALY_INSIGHTS}
    repoLink= "https://github.com"
    demoLink= "https://github.com"
    paperLink= "https://github.com"
    />
  );
}
