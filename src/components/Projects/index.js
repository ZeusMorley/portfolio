import Jeepili, { JEEPILI_TITLE, JEEPILI_TOPICS, JEEPILI_TECHNOLOGIES } from './Jeepili';
import Anomaly, { ANOMALY_TITLE, ANOMALY_TOPICS, ANOMALY_TECHNOLOGIES } from './Anomaly';

export const projects = [
  {
    title: JEEPILI_TITLE,
    topics: JEEPILI_TOPICS,
    techs: JEEPILI_TECHNOLOGIES,
    component: <Jeepili />
  },
  {
    title: ANOMALY_TITLE,
    topics: ANOMALY_TOPICS,
    techs: ANOMALY_TECHNOLOGIES,
    component: <Anomaly />
  },
  // More
];
