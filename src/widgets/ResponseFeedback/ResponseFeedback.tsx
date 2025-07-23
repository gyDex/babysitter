import Image from 'next/image'
import styles from './ResponseFeedback.module.scss'
import { useMobileState } from '@/entities/stores/useMobileModal'

type Props = {
    name: string,
    person: string,
    quote: any,
    tasks?: any,
    isRes?: boolean,
    isEdit?: boolean,
    isDetail?: boolean,
}

const ResponseFeedback:React.FC<Props> = ({isEdit = false,isDetail = false, isRes = true ,person, quote, tasks, name}) => {
    const modalState = useMobileState();

  return (
    <div className={styles['response-feedback']}>
        <div className={styles['response-feedback__top-info-mobile']}>
            <div className={styles['response-feedback__top-label-left']}>
                <div className={styles['response-feedback__top-info-label_city']}>
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
                        <h2 className={styles['response-feedback__name']}>{name}</h2>

                        <address className={styles['response-feedback__address']}>
                            {person}
                        </address>
                    </div>

                    <div className={styles['response-feedback__top-info-right']}>
                        <div className={styles['response-feedback__top-info-labels']}>
                            <div className={styles['response-feedback__top-info-label_city']}>
                                📍Москва
                            </div>

                            <div className={styles['response-feedback__top-info-label']}>
                                Нужна няня
                            </div>
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

            {
                (isDetail) && 
                <div>
                    <p className={styles['response-feedback__subtitle']}>
                        <b>Дополнительно от мамы:</b>
                    </p>

                    <p className={styles['response-feedback__text']}>
                        «Мы ищем няню, которая сможет стать для Марка другом и наставником. Очень ценим доброту, терпение и искреннюю любовь к детям. Хотелось бы, чтобы няня помогала развивать любознательность, играла в развивающие игры, читала книги и проводила время на свежем воздухе.
                    </p>

                    <p className={styles['response-feedback__text']}>
                        Мы готовы создать комфортные условия для работы, всегда открыты к диалогу и учитываем пожелания няни. У нас спокойная семья без конфликтов, верим, что уважение и понимание — основа хороших отношений.
                    </p>

                    <p className={styles['response-feedback__text']}>
                        Будем рады сотрудничеству с профессионалом, который полюбит нашего сына и сможет поддержать его в процессе взросления.»
                    </p>
                </div>
            }

            {
                isRes &&<button onClick={() => {
                    modalState.setRegister(true, '')
                }} className={styles['response-feedback__bottom-btn']}>
                    Откликнуться
                </button>
            }

            {
                (isDetail) &&
                <div className={styles['response-feedback__detail']}>
                    <span className={styles['response-feedback__bottom-title']}>Напишите дополнительную информацию</span>

                    <textarea className={styles['response-feedback__textarea']} name="message" id="message" placeholder='Напишите сопроводительное письмо, рассказ' />
                </div>
            }


            <div className={styles['response-feedback__detail-buttons']}>
                {
                    (isEdit || isDetail) &&<button onClick={() => {
                        modalState.setRegister(true, '')
                    }}
                    style={{
                        marginTop: isDetail ? '0px' : '12px',
                    }}
                    className={styles['response-feedback__bottom-btn_edit']}>
                        Редактировать вакансию
                    </button>
                }

                {
                    (isDetail) &&
                    <button onClick={() => {
                        // modalState.setRegister(true, '')
                    }} className={styles['response-feedback__bottom-btn_save']}>
                        Сохранить
                    </button>
                }
            </div>
        </div>

    </div>
  )
}

export default ResponseFeedback
