import Image from 'next/image'
import styles from './ResponseFeedback.module.scss'
import { useMobileState } from '@/entities/stores/useMobileModal'

type Props = {
    name: string,
    person: string,
    quote: string,
    tasks: string,
}

const ResponseFeedback:React.FC<Props> = ({person, quote, tasks}) => {
    const modalState = useMobileState();

  return (
    <div className={styles['response-feedback']}>
        <div className={styles['response-feedback__top-info-mobile']}>
            <div className={styles['response-feedback__top-label-left']}>
                <div className={styles['response-feedback__top-info-label']}>
                    📍Москва
                </div>

                <div className={styles['response-feedback__top-info-label']}>
                    Нужна няня
                </div>
            </div>

            <span className={styles['response-feedback__words']}>
                <span className={styles['response-feedback__word']}>
                    Частичная
                </span>
                <span className={styles['response-feedback__word']}>
                    Без проживания
                </span>
            </span>
        </div>

        <div className={styles['response-feedback__top']}>
            <div className={styles['response-feedback__avatar']}>
                <Image className={styles['response-feedback__avatar-image']} src={'/images/babysit-benefits/avatar.png'} 
                alt="heart" width={64} height={64} quality={100} />
            </div>

            <div className={styles['response-feedback__top-bottom']}>
                <div className={styles['response-feedback__top-info']}>
                    <div className={styles['response-feedback__top-info-left']}>
                        <h2 className={styles['response-feedback__name']}>Алиса К.</h2>

                        <address className={styles['response-feedback__address']}>
                            {person}
                        </address>
                    </div>

                    <div className={styles['response-feedback__top-info-right']}>
                        <div className={styles['response-feedback__top-info-label']}>
                            Активно ищу работу
                        </div>

                        <span className={styles['response-feedback__words']}>
                            <span className={styles['response-feedback__word']}>
                                Полная
                            </span>
                            <span className={styles['response-feedback__word']}>
                                Без проживания
                            </span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles['response-feedback__top-labels']}>
            <div className={styles['response-feedback__top-label']}>
                <b>Мальчик, 4 года</b>
            </div>

            <div className={styles['response-feedback__top-label']}>
                Будни, 9:00 – 13:00
            </div>
        </div>

        <p className={styles['response-feedback__subtitle']}>
            <b>Чем заниматься:</b>
        </p>

        <div className={styles['response-feedback__labels']}>
            <div className={styles['response-feedback__label']}>
                🌳 Прогулки на свежем воздухе
            </div>

            <div className={styles['response-feedback__label']}>
                📖 Чтение книг
            </div>

            <div className={styles['response-feedback__label']}>
                🎨 Рисование и лепка
            </div>

            <div className={styles['response-feedback__label']}>
                😴 Укладывание на дневной сон
            </div>
        </div>
        
        <div className={styles['response-feedback__bottom']}>
            <div>
                <p className={styles['response-feedback__subtitle']}>
                    <b>Задачи няни:</b>
                </p>

                <p className={styles['response-feedback__text']}>{tasks}</p>

                <span className={styles['response-feedback__quote']}>
                    {quote}
                </span>
            </div>

            <button onClick={() => {
                modalState.setRegister(true, '')
            }} className={styles['response-feedback__bottom-btn']}>
                Откликнуться
            </button>
        </div>

    </div>
  )
}

export default ResponseFeedback
