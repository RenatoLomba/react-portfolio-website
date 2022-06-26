import { FC } from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import data from '../../configs/data.json';
import styles from './about.module.scss';
import { Card } from './Card';

export const About: FC = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutMe}>
          <div>
            <img src="/assets/me-about.jpg" alt="About Image" />
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutCards}>
            <Card
              heading="Experience"
              text={`${data.about.experienceYears}+ Years Working`}
              icon={FaAward}
            />
            <Card
              heading="Clients"
              text={`${data.about.clients}+ Worldwide`}
              icon={FiUsers}
            />
            <Card
              heading="Projects"
              text={`${data.about.projects}+ Completed`}
              icon={VscFolderLibrary}
            />
          </div>

          <p>{data.about.description}</p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};
