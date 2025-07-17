import Link from 'next/link';
import ResponseFeedback from '../ResponseFeedback/ResponseFeedback';
import styles from './Reviews__Baby.module.scss';

const Reviews__Baby = () => {
    return (
        <section className={styles['reviews-baby']} >
            <div className={styles['reviews-baby__container']}>
                <h1 className={styles['reviews-baby__title']}>
                    Наш сервис ежедневно привлекает от 3-х новых семей, активно ищущих няню
                </h1>

                <ResponseFeedback quote='“Важно, чтобы няня была доброй и спокойной – Марк быстро привязывается.”' tasks='Обеспечить безопасность, общение без гаджетов, мягкое вовлечение в игры.' name="Анна" person="мама Марка " />

                <Link href={'/'} className={styles['reviews-baby__link']}>
                    Посмотреть все
                </Link>
            </div>
        </section>
    )

}

export default Reviews__Baby
