import { FC } from 'react';
import { IconType } from 'react-icons';

import styles from './contact.module.scss';

interface IContactOptionProps {
  option: string;
  value: string;
  href: string;
  icon: IconType;
}

export const ContactOption: FC<IContactOptionProps> = ({
  href,
  value,
  option,
  icon: Icon,
}) => {
  return (
    <article className={styles.contactOption}>
      <Icon />
      <h4>{option}</h4>
      <h5>{value}</h5>
      <a href={href} target="_blank" rel="noreferrer">
        Send a message
      </a>
    </article>
  );
};
