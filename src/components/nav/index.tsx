import { FC, useState } from 'react';

import { navLinks } from '../../configs/nav-links';
import styles from './nav.module.scss';

export const Nav: FC = () => {
  const [activeNav, setActiveNav] = useState(1);

  const handleNavClick = (navId: number) => {
    setActiveNav(navId);
  };

  return (
    <nav className={styles.navContainer}>
      {navLinks.map(({ id, href, icon: Icon }) => (
        <a
          className={activeNav === id ? styles.active : ''}
          key={id}
          href={href}
          onClick={() => handleNavClick(id)}
        >
          <Icon />
        </a>
      ))}
    </nav>
  );
};
