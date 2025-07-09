import Link from 'next/link'
import CardBabysitter from '../CardBabysitter/CardBabysitter'
import styles from './CardBabysitterList.module.scss'

const CardBabysitterList = () => {
  return (
    <section className={styles['card-babysitters']}>
        <div className={styles['card-babysitters__inner']}>
            <h2 className={styles['card-babysitters__title']}>Найдите няню, к которой потянется ваш ребенок</h2>

            <div className={styles['card-babysitters__list']}>
                <CardBabysitter />
                <CardBabysitter />
                <CardBabysitter />
                <CardBabysitter />
            </div>

            <Link className={styles['card-babysitters__link']} href={'/'}>
            Посмотреть всех</Link>
        </div>
    </section>
  )
}

export default CardBabysitterList
