'use client'

import styles from './Reviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid,  } from 'swiper/modules';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const Reviews = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles['reviews']}>
      <div className={styles['reviews__container']}>
        <div className={styles['reviews__item-first-desk']}>
            <div className={styles['reviews__item-first-content']}>
                <div className={styles['reviews__item-first-top']}>
                    <div className={styles['reviews__rating']}>
                        4.94

                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FDEB9F"/>
                        </svg>
                    </div>
                </div>

                <h2 className={styles['reviews__title']}>
                    Никто <br /> не расскажет  <br /> о нас лучше наших клиентов
                </h2>
            </div>

            <div className={styles['reviews__item-bottom-image']}>
                <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image1.jpg'} alt='' height={64} width={64} />
                <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image2.jpg'} alt='' height={64} width={64} />
                <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image3.jpg'} alt='' height={64} width={64} />
                <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image4.jpg'} alt='' height={64} width={64} />
                <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image5.png'} alt='' height={64} width={64} />
            </div>
        </div>

        <Swiper
          slidesPerView={3}
          slidesOffsetBefore={408}
          grid={{
            rows: 2,
            fill: 'row', // по строкам
          }}
          autoHeight={false}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          modules={[Grid]}
          className={styles['reviews__list']}
           onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            grid: {
                rows: 1,
            },
            },
            768: {
            slidesPerView: 2,
            slidesOffsetBefore: 384,
            grid: {
                rows: 1,
            },
            },
            1024: {
            slidesPerView: 3,
            grid: {
                rows: 3,
            },
            }
        }}
        >
            <SwiperSlide  className={styles['reviews__item-first-mob']}>
                    <div className={styles['reviews__item-first-content']}>
                        <div className={styles['reviews__item-first-top']}>
                            <div className={styles['reviews__rating']}>
                                4.94

                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FDEB9F"/>
                                </svg>
                            </div>
                        </div>

                        <h2 className={styles['reviews__title']}>
                            Никто не <br /> расскажет о нас <br /> лучше наших клиентов
                        </h2>
                    </div>

                    <div className={styles['reviews__item-bottom-image']}>
                        <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image1.jpg'} alt='' height={64} width={64} />
                        <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image2.jpg'} alt='' height={64} width={64} />
                        <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image3.jpg'} alt='' height={64} width={64} />
                        <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image4.jpg'} alt='' height={64} width={64} />
                        <Image className={styles['reviews__bottom-item']} src={'/images/reviews/image5.png'} alt='' height={64} width={64} />
                    </div>

            </SwiperSlide>
            <SwiperSlide  className={styles['reviews__item']}>
              <div className={styles['reviews__item-top']}>
                <h2 className={styles['reviews__item-title']}>Ольга С.</h2>
                <p className={styles['reviews__item-description']}>
                  Спасибо за отличный сервис! Нашли няню быстро, дочка сразу пошла на контакт. Было спокойно оставить ребёнка, всё прошло замечательно!
                </p>
              </div>
              <div className={styles['reviews__item-bottom']}>
                <Link href='/' className={styles['reviews__item-link']}>Читать полностью</Link>
                <span className={styles['reviews__item-date']}>25.10.2025</span>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={styles['reviews__item']}>
              <div className={styles['reviews__item-top']}>
                <h2 className={styles['reviews__item-title']}>Ольга С.</h2>
                <p className={styles['reviews__item-description']}>
                  Спасибо за отличный сервис! Нашли няню быстро, дочка сразу пошла на контакт. Было спокойно оставить ребёнка, всё прошло замечательно!
                </p>
              </div>
              <div className={styles['reviews__item-bottom']}>
                <Link href='/' className={styles['reviews__item-link']}>Читать полностью</Link>
                <span className={styles['reviews__item-date']}>25.10.2025</span>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={styles['reviews__item']}>
              <div className={styles['reviews__item-top']}>
                <h2 className={styles['reviews__item-title']}>Ольга С.</h2>
                <p className={styles['reviews__item-description']}>
                  Спасибо за отличный сервис! Нашли няню быстро, дочка сразу пошла на контакт. Было спокойно оставить ребёнка, всё прошло замечательно!
                </p>
              </div>
              <div className={styles['reviews__item-bottom']}>
                <Link href='/' className={styles['reviews__item-link']}>Читать полностью</Link>
                <span className={styles['reviews__item-date']}>25.10.2025</span>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={styles['reviews__item']}>
              <div className={styles['reviews__item-top']}>
                <h2 className={styles['reviews__item-title']}>Ольга С.</h2>
                <p className={styles['reviews__item-description']}>
                  Спасибо за отличный сервис! Нашли няню быстро, дочка сразу пошла на контакт. Было спокойно оставить ребёнка, всё прошло замечательно!
                </p>
              </div>
              <div className={styles['reviews__item-bottom']}>
                <Link href='/' className={styles['reviews__item-link']}>Читать полностью</Link>
                <span className={styles['reviews__item-date']}>25.10.2025</span>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={styles['reviews__item']}>
              <div className={styles['reviews__item-top']}>
                <h2 className={styles['reviews__item-title']}>Ольга С.</h2>
                <p className={styles['reviews__item-description']}>
                  Спасибо за отличный сервис! Нашли няню быстро, дочка сразу пошла на контакт. Было спокойно оставить ребёнка, всё прошло замечательно!
                </p>
              </div>
              <div className={styles['reviews__item-bottom']}>
                <Link href='/' className={styles['reviews__item-link']}>Читать полностью</Link>
                <span className={styles['reviews__item-date']}>25.10.2025</span>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={styles['reviews__item']}>
              <div className={styles['reviews__item-top']}>
                <h2 className={styles['reviews__item-title']}>Ольга С.</h2>
                <p className={styles['reviews__item-description']}>
                  Спасибо за отличный сервис! Нашли няню быстро, дочка сразу пошла на контакт. Было спокойно оставить ребёнка, всё прошло замечательно!
                </p>
              </div>
              <div className={styles['reviews__item-bottom']}>
                <Link href='/' className={styles['reviews__item-link']}>Читать полностью</Link>
                <span className={styles['reviews__item-date']}>25.10.2025</span>
              </div>
            </SwiperSlide>
        </Swiper>

        <div className={styles['reviews__nav']}>
          <button onClick={() => swiperRef.current?.slidePrev()} className={styles['reviews__nav-prev']}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#8848FF" fillOpacity="0.3"/>
              <path d="M9.47097 20.5303C9.17808 20.2374 9.17808 19.7626 9.47097 19.4697L14.2439 14.6967C14.5368 14.4038 15.0117 14.4038 15.3046 14.6967C15.5975 14.9896 15.5975 15.4645 15.3046 15.7574L11.062 20L15.3046 24.2426C15.5975 24.5355 15.5975 25.0104 15.3046 25.3033C15.0117 25.5962 14.5368 25.5962 14.2439 25.3033L9.47097 20.5303ZM31.668 20V20.75H10.0013V20V19.25H31.668V20Z" fill="white" fillOpacity="0.5"/>
            </svg>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} className={styles['reviews__nav-next']}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#8848FF"/>
              <path d="M32.197 20.5303C32.4899 20.2374 32.4899 19.7626 32.197 19.4697L27.424 14.6967C27.1311 14.4038 26.6563 14.4038 26.3634 14.6967C26.0705 14.9896 26.0705 15.4645 26.3634 15.7574L30.606 20L26.3634 24.2426C26.0705 24.5355 26.0705 25.0104 26.3634 25.3033C26.6563 25.5962 27.1311 25.5962 27.424 25.3033L32.197 20.5303ZM10 20V20.75H31.6667V20V19.25H10V20Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
