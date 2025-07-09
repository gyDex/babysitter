import Image from 'next/image'
import styles from './Solutions.module.scss'

const Solutions = () => {
    return (
        <>  
            <section className={styles['solutions']}>
                <div className={styles['solutions__inner']}>
                    <h2 className={styles['solutions__title']}>Не просто освобождаем вам время, а строим успешное будущее вашего ребенка</h2>

                    <ul className={styles['solutions__list']}>
                        <li className={styles['solutions__item']}>
                            <div className={styles['solutions__image-wrap']}>
                                <Image className={styles['solutions__item-image']} src={'/images/solutions/image.png'} height={100} width={100} alt='' />
                            </div>

                            <div className={styles['solutions__info']}>
                                <h2 className={styles['solutions__info-title']}>
                                    Создать
                                </h2> 

                                <span className={styles['solutions__info-description']}>для ребёнка позитивный социальный опыт и навыки общения в праздниках и играх</span>
                            </div>
                        </li>

                        <li className={styles['solutions__item']}>
                            <div className={styles['solutions__image-wrap']}>
                                <Image className={styles['solutions__item-image']} src={'/images/solutions/image6.png'} height={100} width={100} alt='' />
                            </div>

                            <div className={styles['solutions__info']}>
                                <h2 className={styles['solutions__info-title']}>
                                    Помочь
                                </h2> 

                                <span className={styles['solutions__info-description']}>ребёнку исследовать мир вне дома: через активные прогулки, спорт и живое общение</span>
                            </div>
                        </li>

                        <li className={styles['solutions__item']}>
                            <div className={styles['solutions__image-wrap']}>
                                <Image className={styles['solutions__item-image']} src={'/images/solutions/image2.png'} height={100} width={100} alt='' />
                            </div>

                            <div className={styles['solutions__info']}>
                                <h2 className={styles['solutions__info-title']}>
                                    Занять
                                </h2> 

                                <span className={styles['solutions__info-description']}>ребёнка полезными играми и мягким обучением, пока вы сосредоточены на делах</span>
                            </div>
                        </li>

                        <li className={styles['solutions__item']}>
                            <div className={styles['solutions__image-wrap']}>
                                <Image className={styles['solutions__item-image']} src={'/images/solutions/image5.png'} height={100} width={100} alt='' />
                            </div>

                            <div className={styles['solutions__info']}>
                                <h2 className={styles['solutions__info-title']}>
                                    Организовать
                                </h2> 

                                <span className={styles['solutions__info-description']}>надёжное и тёплое сопровождение ребёнка в поездке к близким</span>
                            </div>
                        </li>

                        <li className={styles['solutions__item']}>
                            <div className={styles['solutions__image-wrap']}>
                                <Image className={styles['solutions__item-image']} src={'/images/solutions/image3.png'} height={100} width={100} alt='' />
                            </div>

                            <div className={styles['solutions__info']}>
                                <h2 className={styles['solutions__info-title']}>
                                    Организовать
                                </h2> 

                                <span className={styles['solutions__info-description']}>надёжное и тёплое сопровождение ребёнка в поездке к близким</span>
                            </div>
                        </li>

                        
                        <li className={styles['solutions__item']}>
                            <div className={styles['solutions__image-wrap']}>
                                <Image className={styles['solutions__item-image']} src={'/images/solutions/image4.png'} height={100} width={100} alt='' />
                            </div>

                            <div className={styles['solutions__info']}>
                                <h2 className={styles['solutions__info-title']}>
                                    Организовать
                                </h2> 

                                <span className={styles['solutions__info-description']}>надёжное и тёплое сопровождение ребёнка в поездке к близким</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Solutions
