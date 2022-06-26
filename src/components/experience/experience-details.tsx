import { FC } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

import styles from './experience.module.scss';

interface IExperienceDetailsProps {
  title: string;
  level: 'Experienced' | 'Intermediate' | 'Basic';
}

export const ExperienceDetails: FC<IExperienceDetailsProps> = ({
  level,
  title,
}) => {
  return (
    <article className={styles.experienceDetails}>
      <BsPatchCheckFill />

      <div>
        <h4>{title}</h4>
        <small className="text-light">{level}</small>
      </div>
    </article>
  );
};
