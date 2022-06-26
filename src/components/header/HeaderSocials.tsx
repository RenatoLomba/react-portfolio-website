import { FC } from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';

import data from '../../configs/data.json';
import styles from './header.module.scss';

export const HeaderSocials: FC = () => {
  return (
    <div className={styles.headerSocials}>
      <a href={data.headerSocials.linkedin} target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href={data.headerSocials.github} target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href={data.headerSocials.dribble} target="_blank" rel="noreferrer">
        <BsDribbble />
      </a>
    </div>
  );
};
