import { FC } from 'react';
import { IconType } from 'react-icons';

import styles from './about.module.scss';

interface ICardProps {
  heading: string;
  text: string;
  icon: IconType;
}

export const Card: FC<ICardProps> = ({ heading, text, icon: Icon }) => {
  return (
    <article className={styles.card}>
      <Icon />
      <h5>{heading}</h5>
      <small>{text}</small>
    </article>
  );
};
