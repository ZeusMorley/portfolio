import ProjectTemplate from './Template';

export const JEEPILI_TITLE = "Jeepili";
export const JEEPILI_TOPICS = ['Mobile', 'Android'];
export const JEEPILI_TECHNOLOGIES = ['React Native', 'Typescript', 'Firebase'];

const JEEPILI_DESCRIPTION = "A mobile app that helps users in Iligan City plan their jeepney commutes with AR-assisted navigation for pickup and drop-off points. "

const JEEPILI_HIGHLIGHTS = [
  "Recommends jeepney routes based on user input",
  "Displays walking paths for transfers",
  "Uses AR to project real-world jeepney stops",
  "Works entirely on Android via Expo",
  "The thesis paper is still under revision but it is available to read."
]

const JEEPILI_CONTRIBUTION = "I developed the full app logic, integrated map features, and handled AR rendering. Firebase was used for user data and routes."

const JEEPILI_INSIGHTS = "Integrating AR markers using Viro and ARCore was new to me. I learned how to project virtual elements into real-world coordinates and deal with sensor calibration issues. "


export default function Jeepili() {
  return (
    <ProjectTemplate
    title={JEEPILI_TITLE}
    topics = {JEEPILI_TOPICS}
    technologies = {JEEPILI_TECHNOLOGIES}
    description= {JEEPILI_DESCRIPTION}
    highlights = {JEEPILI_HIGHLIGHTS}
    contribution= {JEEPILI_CONTRIBUTION}
    insights= {JEEPILI_INSIGHTS}
    repoLink= ''
    demoLink= ''
    paperLink= '/Thesis__Jeepili__Adjust_Format_.pdf'
    />
  );
}
