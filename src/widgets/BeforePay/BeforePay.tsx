'use client'

import styles from './BeforePay.module.scss'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
} as any

const BeforePay = () => {
  return (
    <section className={styles['before-pay']}>
      <motion.h2
        className={styles['before-pay__title']}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Что вас ждет после оплаты
      </motion.h2>

      <ul className={styles['before-pay__list']}>
        {/** Первый элемент */}
        <motion.li
          className={styles['before-pay__item']}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
        >
          <svg width="85" height="113" viewBox="0 0 85 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.1796 -0.927155L54.0044 -33M71.2437 -9.42839L75.2319 -25.5292M71.2437 71.0757L79.7347 112.68M60.1796 83.8276L57.478 101.216M96.7166 20.4179L121.289 7.57408M28.7887 20.4179L1 2.93704M16.6955 26.8951H3.57303M34.964 58.9679L11.1635 78.9329M99.4183 52.5828L118.33 62.1973M63.8167 20.4179L83.7123 2.93704L77.7785 30.2072L101.863 37.0248L77.7785 43.8423L83.7123 62.1973L65.7364 52.5828L48.2841 76.3568L50.3784 48.0378L16.6955 42.0943L45.2561 30.2072L39.7325 4.33552L63.8167 20.4179Z" stroke="#F3E19C" strokeWidth="2.5"/>
          </svg>
          <span className={styles['before-pay__number']}>01</span>
          <span className={styles['before-pay__item-title']}>
            Получите доступ к базе нянь
          </span>
        </motion.li>

        {/** Второй элемент */}
        <motion.li
          className={styles['before-pay__item']}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
        >
          <svg width="55" height="60" viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.0016 58C50.3764 39.9612 63.2711 9.51019 44.0523 2.80768C24.8335 -3.89483 17.1953 33.3873 26.7225 31.1072C36.2498 28.827 18.0999 4.55808 7.16813 12.4913C-3.76369 20.4245 1.80668 44.2777 32.0016 58Z" stroke="#F3E19C" strokeWidth="2.5"/>
          </svg>
          <span className={styles['before-pay__number']}>02</span>
          <span className={styles['before-pay__item-title']}>
            Выложите вакансию, расскажете о ребенке и ваших задачах
          </span>
        </motion.li>

        {/** Третий элемент */}
        <motion.li
          className={styles['before-pay__item']}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
        >
          <svg width="66" height="46" viewBox="0 0 66 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.1215 2L5 19.8195L21.6108 24.8944M64.1215 2L21.6108 24.8944M64.1215 2L56.8971 38.1249L36.4729 30.5455M64.1215 2L32.742 29.161M21.6108 24.8944L25.3954 43M32.742 29.161L25.3954 43M32.742 29.161L36.4729 30.5455M25.3954 43L36.4729 30.5455" stroke="#F3E19C" strokeWidth="2.5"/>
          </svg>
          <span className={styles['before-pay__number']}>03</span>
          <span className={styles['before-pay__item-title']}>
            Свяжетесь с понравившейся няней (количество контактов не ограничено)
          </span>
        </motion.li>

        {/** Четвёртый элемент */}
        <motion.li
          className={styles['before-pay__item']}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants }
        >
          <svg width="58" height="54" viewBox="0 0 58 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8139 24.1443L27.1518 40.1039C31.8727 31.8591 44.476 12.4956 57.1224 1M2 11.0115L4.2331 52L45.8981 49.2321L43.0186 9.00924L2 11.0115Z" stroke="#F3E19C" strokeWidth="2.5"/>
          </svg>
          <span className={styles['before-pay__number']}>04</span>
          <span className={styles['before-pay__item-title']}>
            Получите договор, который будет регламентировать ваши отношения с няней
          </span>
        </motion.li>
      </ul>
    </section>
  )
}

export default BeforePay
