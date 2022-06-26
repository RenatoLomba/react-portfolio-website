import { FC } from 'react';

import data from '../../configs/data.json';
import { CTA } from './CTA';
import styles from './header.module.scss';
import { HeaderSocials } from './HeaderSocials';

export const Header: FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={`container`}>
        <h5>Hello I&apos;m</h5>
        <h1>{data.yourName}</h1>
        <h5 className="text-light">{data.yourRole}</h5>

        <CTA />

        <HeaderSocials />

        <div className={styles.me}>
          <img src="/assets/me.png" alt="Me" />
        </div>

        <a href="#contact" className={styles.scrollDown}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};
