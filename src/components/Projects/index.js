import Jeepili, { JEEPILI_TITLE, JEEPILI_TOPICS, JEEPILI_TECHNOLOGIES } from './Jeepili';
import Anomaly, { ANOMALY_TITLE, ANOMALY_TOPICS, ANOMALY_TECHNOLOGIES } from './Anomaly';
import CNN, { CNN_TITLE, CNN_TOPICS, CNN_TECHNOLOGIES } from './Cnn';

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
  {
    title: CNN_TITLE,
    topics: CNN_TOPICS,
    techs: CNN_TECHNOLOGIES,
    component: <CNN />
  },
  // More
];
