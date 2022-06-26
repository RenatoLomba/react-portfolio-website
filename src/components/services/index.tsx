import { FC } from 'react';

import { Service } from './service';
import styles from './services.module.scss';

const uiUxServicesList = Array.from(Array(5).keys()).map((key) => {
  return {
    id: String(key),
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  };
});

const webDevelopmentServicesList = Array.from(Array(6).keys()).map((key) => {
  return {
    id: String(key),
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  };
});

const contentCreationServicesList = Array.from(Array(4).keys()).map((key) => {
  return {
    id: String(key),
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  };
});

export const Services: FC = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={`container ${styles.servicesContainer}`}>
        <Service title="UI/UX Design" serviceList={uiUxServicesList} />
        <Service
          title="Web Development"
          serviceList={webDevelopmentServicesList}
        />
        <Service
          title="Content Creation"
          serviceList={contentCreationServicesList}
        />
      </div>
    </section>
  );
};
