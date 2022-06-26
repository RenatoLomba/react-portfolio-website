import { FC } from 'react';

import data from '../../configs/data.json';
import styles from './portfolio.module.scss';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio: FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${styles.portfolioContainer}`}>
        {data.portfolioItems.map((item) => (
          <PortfolioItem
            key={item.id}
            imgSrc={item.image}
            demo={item.demo}
            github={item.github}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};
