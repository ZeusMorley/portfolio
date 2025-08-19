import ProjectTemplate from './Template';

export const CNN_TITLE = "5-Candle Chart Trend CNN";
export const CNN_TOPICS = ['Computer Vision', 'Deep Learning', 'Time Series'];
export const CNN_TECHNOLOGIES = ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib', 'Jupyter'];

const CNN_DESCRIPTION = "I taught a small model to read 5‑candle charts and decide if the trend is up, down, or sideways. I organized the data, prepared the images, and trained the model until it performed reliably on new samples.";
const CNN_HIGHLIGHTS = [
  "Turned 5‑bar chart windows into simple grayscale images",
  "Trained a compact model that learns basic trend patterns",
  "Reached solid validation accuracy and identified ways to improve"
]

const CNN_CONTRIBUTION = "I put together the dataset, built and trained the model, and evaluated results to understand where it does well and where it struggles.";

const CNN_INSIGHTS = "Clean, consistent data helps more than fancy modeling. With small datasets, simple augmentation and balanced classes go a long way.";

export default function CNN() {
  return (
    <ProjectTemplate
    title={CNN_TITLE}
    topics = {CNN_TOPICS}
    technologies = {CNN_TECHNOLOGIES}
    description= {CNN_DESCRIPTION}
    highlights = {CNN_HIGHLIGHTS}
    contribution= {CNN_CONTRIBUTION}
    insights= {CNN_INSIGHTS}
    repoLink= "https://github.com"
    demoLink= "https://github.com"
    paperLink= "https://github.com"
    />
  );
}
