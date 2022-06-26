import { FC } from 'react';

import styles from './portfolio.module.scss';

interface IPortfolioItemProps {
  imgSrc: string;
  title: string;
  github: string;
  demo: string;
}

export const PortfolioItem: FC<IPortfolioItemProps> = ({
  imgSrc,
  title,
  demo,
  github,
}) => {
  return (
    <article className={styles.portfolioItem}>
      <div className={styles.portfolioItemImage}>
        <img src={imgSrc} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className={styles.portfolioItemCta}>
        <a href={github} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};
