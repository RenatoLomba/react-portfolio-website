import { FC } from 'react';
import { BiCheck } from 'react-icons/bi';

import styles from './services.module.scss';

interface IServiceItem {
  id: string;
  description: string;
}

interface IServiceProps {
  title: string;
  serviceList: IServiceItem[];
}

export const Service: FC<IServiceProps> = ({ title, serviceList }) => {
  return (
    <article className={styles.service}>
      <header className={styles.serviceHead}>
        <h3>{title}</h3>
      </header>

      <ul className={styles.serviceList}>
        {serviceList.map((service) => (
          <li key={service.id}>
            <BiCheck />

            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
