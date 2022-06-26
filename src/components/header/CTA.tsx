import { FC } from 'react';

import styles from './header.module.scss';

export const CTA: FC = () => {
  return (
    <div className={styles.cta}>
      <a href="/assets/cv.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s Talk
      </a>
    </div>
  );
};
