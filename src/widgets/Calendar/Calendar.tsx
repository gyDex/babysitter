import React from 'react'
import styles from './Calendar.module.scss'
import CalendarItem from './CalendarItem'

type Props = {
    isEdit?: boolean,
    items?: any
}

const Calendar:React.FC<Props> = ({isEdit = true, items = []}) => {
  return (
    <div className={styles['calendar']}>
        <div className={styles['calendar__inner']}>
            <div className={styles['calendar__left']}>
                <div  className={styles['calendar__left-item']}>
                    Утро
                </div>
                <div  className={styles['calendar__left-item']}>
                    День
                </div>
                <div  className={styles['calendar__left-item']}>
                    Вечер
                </div>
                <div  className={styles['calendar__left-item']}>
                    Ночь
                </div>
            </div>

            <div className={styles['calendar__right']}>
                <div className={styles['calendar__right-top']}>
                    <div className={styles['calendar__top-item']}>
                        ПН
                    </div>
                    <div className={styles['calendar__top-item']}>
                        ВТ
                    </div>
                    <div className={styles['calendar__top-item']}>
                        СР
                    </div>
                    <div className={styles['calendar__top-item']}>
                        ЧТ
                    </div>
                    <div className={styles['calendar__top-item']}>
                        ПТ
                    </div>
                    <div className={styles['calendar__top-item']}>
                        СБ
                    </div>
                    <div className={styles['calendar__top-item']}>
                        ВС
                    </div>
                </div>

                <div className={styles['calendar__right-content']}>                  
                    {Array.from({ length: 28 }).map((_, index) => (
                        <CalendarItem key={index} isEdit={isEdit} isActive={items[index] && items.length > 0} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calendar
