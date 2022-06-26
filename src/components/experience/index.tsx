import { FC } from 'react';

import { ExperienceDetails } from './experience-details';
import styles from './experience.module.scss';

export const Experience: FC = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${styles.experienceContainer}`}>
        <div>
          <h3>Frontend Development</h3>

          <div className={styles.experienceContent}>
            <ExperienceDetails title="HTML" level="Experienced" />
            <ExperienceDetails title="CSS" level="Intermediate" />
            <ExperienceDetails title="JavaScript" level="Experienced" />
            <ExperienceDetails title="Bootstrap" level="Experienced" />
            <ExperienceDetails title="Tailwind" level="Experienced" />
            <ExperienceDetails title="React" level="Experienced" />
            <ExperienceDetails title="Angular" level="Intermediate" />
            <ExperienceDetails title="VueJs" level="Basic" />
          </div>
        </div>
        <div>
          <h3>Backend Development</h3>

          <div className={styles.experienceContent}>
            <ExperienceDetails title="Node JS" level="Experienced" />
            <ExperienceDetails title="MySQL" level="Experienced" />
            <ExperienceDetails title="Rest" level="Experienced" />
            <ExperienceDetails title="MongoDB" level="Intermediate" />
            <ExperienceDetails title="PHP" level="Basic" />
            <ExperienceDetails title="Python" level="Basic" />
          </div>
        </div>
      </div>
    </section>
  );
};
