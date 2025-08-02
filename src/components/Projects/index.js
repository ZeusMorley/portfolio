import Jeepili, { JEEPILI_TITLE, JEEPILI_TOPICS } from './Jeepili';
import Anomaly, { ANOMALY_TITLE, ANOMALY_TOPICS } from './Anomaly';

export const projects = [
  {
    title: JEEPILI_TITLE,
    topics: JEEPILI_TOPICS,
    component: <Jeepili />
  },
  {
    title: ANOMALY_TITLE,
    topics: ANOMALY_TOPICS,
    component: <Anomaly />
  },
  // More
];
