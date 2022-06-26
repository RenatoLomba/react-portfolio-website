import { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import data from '../../configs/data.json';
import { Testimonial } from './testimonial';
import styles from './testimonials.module.scss';

export const Testimonials: FC = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className={`container ${styles.testimonialsContainer}`}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.clientsTestimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Testimonial
              name={testimonial.name}
              avatar={testimonial.avatar}
              review={testimonial.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
