'use client'

import Image from 'next/image';
import styles from './Guarantees.module.scss';
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';

const Guarantees = () => {
    const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // один раз
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section className={styles['guarantees']}>
        <motion.ul className={styles['guarantees__list']}>
            <motion.li   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.1 }} className={styles['guarantees__item-banner']}>
                <Image className={styles['guarantees__item-image-bg']} src={'/images/guarantess/image.png'} height={100} width={100} alt='' />

                <span className={styles['guarantees__item-banner-text']}>
                    Проверяем каждую няню, как для своего ребенка
                </span>
            </motion.li>

            <motion.li   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.1 }} className={styles['guarantees__item-1']}>
                <div className={styles['guarantees__item-info']}>
                    <span className={styles['guarantees__item-title']}>
                        Платформа, <br /> где маму понимают
                    </span>
                    <span  className={styles['guarantees__item-description']}>Основана многодетной мамой, которая лично прошла путь от тревоги к доверию</span>
                </div>
                <div className={styles['guarantees__image-wrap']}>
                    <Image className={styles['guarantees__item-image_heart']} src={'/images/guarantess/image1.png'} height={100} width={100} alt='' />
                </div>
            </motion.li>

            <motion.li   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.1 }} className={styles['guarantees__item-2']}>
                <div className={styles['guarantees__item-info']}>
                    <span className={styles['guarantees__item-title']}>
                        Мы проверяем, <br />чтобы вы доверяли
                    </span>
                    <span  className={styles['guarantees__item-description']}>
                        Все няни проходят проверку документов на благонадёжность
                    </span>
                </div>
                <div className={styles['guarantees__image-wrap']}>
                    <Image className={styles['guarantees__item-image-2']} src={'/images/guarantess/sheets.png'} height={100} width={100} alt='' />
                </div>
            </motion.li>

            <motion.li   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.1 }} className={styles['guarantees__item-3']}>
                <div className={styles['guarantees__item-info']}>
                    <span className={styles['guarantees__item-title']}>
                        Няни, которых <br />не нужно доучивать
                    </span>
                    <span  className={styles['guarantees__item-description']}>
                        Каждая няня проходит дополнительное обучение и знает все тонкости по воспитанию ребенка
                    </span>
                </div>
                <div className={styles['guarantees__image-wrap']}>
                    <Image className={styles['guarantees__item-image-3']} src={'/images/guarantess/image4.png'} height={100} width={100} alt='' />
                </div>
            </motion.li>

            <motion.li   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.1 }} className={styles['guarantees__item-4']}>
                <div className={styles['guarantees__item-info']}>
                    <span className={styles['guarantees__item-title']}>
                        Без посредников <br />и переплат
                    </span>
                    <span  className={styles['guarantees__item-description']}>
                        Прозрачная оплата: платите напрямую няне, без агенств
                    </span>
                </div>
                <div className={styles['guarantees__image-wrap']}>
                    <Image className={styles['guarantees__item-image-4']} src={'/images/guarantess/money2.png'} height={100} width={100} alt='' />
                </div>
            </motion.li>

            <motion.li   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.1 }} className={styles['guarantees__item-5']}>
                <div className={styles['guarantees__item-info']}>
                    <span className={styles['guarantees__item-title']}>
                        Юридическая поддержка
                    </span>
                    <span  className={styles['guarantees__item-description']}>
                        Предоставляем договор, который поможет регламентировать отношения между вами и няней
                    </span>
                </div>
                <div className={styles['guarantees__image-wrap']}>
                    <Image className={styles['guarantees__item-image-6']} src={'/images/guarantess/folder.png'} height={100} width={100} alt='' />
                </div>
            </motion.li>
        </motion.ul>
    </section>
  )
}

export default Guarantees
