import { FC } from 'react';

import styles from './testimonials.module.scss';

interface ITestimonialProps {
  avatar: string;
  name: string;
  review: string;
}

export const Testimonial: FC<ITestimonialProps> = ({
  avatar,
  name,
  review,
}) => {
  return (
    <article className={styles.testimonial}>
      <div className={styles.clientAvatar}>
        <img src={avatar} alt={name} />
      </div>
      <h5>{name}</h5>
      <small>{review}</small>
    </article>
  );
};
