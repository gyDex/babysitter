'use client';

import Image from 'next/image';
import styles from './Solutions.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const items = [
  {
    title: 'Создать',
    text: 'для ребёнка позитивный социальный опыт и навыки общения в праздниках и играх',
    img: '/images/solutions/image.png',
  },
  {
    title: 'Помочь',
    text: 'ребёнку исследовать мир вне дома: через активные прогулки, спорт и живое общение',
    img: '/images/solutions/image6.png',
  },
  {
    title: 'Занять',
    text: 'ребёнка полезными играми и мягким обучением, пока вы сосредоточены на делах',
    img: '/images/solutions/image2.png',
  },
  {
    title: 'Организовать',
    text: 'надёжное и тёплое сопровождение ребёнка в поездке к близким',
    img: '/images/solutions/image5.png',
  },
  {
    title: 'Поддержать',
    text: 'системность и самостоятельность ребёнка в регулярных обучающих занятиях',
    img: '/images/solutions/image3.png',
  },
  {
    title: 'Обеспечить',
    text: 'спокойный и безопасный переход между школой и домом — с вниманием и заботой',
    img: '/images/solutions/image4.png',
  },
];

const Solutions = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

    const [itemHeight, setItemHeight] = useState(180);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setItemHeight(isMobile ? 1000 : 180);
    };

    handleResize(); // начальное значение
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(itemHeight)

  const listHeight = useTransform(scrollYProgress, [0, 1], [items.length * itemHeight, itemHeight]);

  const yTransforms = items.map((_, i) => {
    const start = i * 0.1;
    const end = start + 0.15;
    return useTransform(scrollYProgress, [start, end], [i * itemHeight, 0]);
  });

  return (
    <section
      ref={sectionRef}
      className={styles['solutions']}
      style={{ height: '250vh', position: 'relative' }}
    >
      <div
        className={styles['solutions__inner']}
        style={{
          position: 'sticky',
          top: 0,
          height: 'max-content',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 className={styles['solutions__title']}>
          Не просто освобождаем вам время, а строим успешное будущее вашего ребёнка
        </h2>

        <motion.ul
          className={styles['solutions__list']}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 792,
            height: listHeight,
            marginTop: 40,
          }}
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              className={styles['solutions__item']}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                y: yTransforms[i],
                zIndex: items.length + i,
              }}
            >
              <div className={styles['solutions__image-wrap']}>
                <Image
                  className={styles['solutions__item-image']}
                  src={item.img}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className={styles['solutions__info']}>
                <h2 className={styles['solutions__info-title']}>{item.title}</h2>
                <span className={styles['solutions__info-description']}>{item.text}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Solutions;
