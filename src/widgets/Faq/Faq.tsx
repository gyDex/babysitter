
import { homeFaqData } from '@/entities/FAQ/home__page'
import styles from './Faq.module.scss'
import FAQ_Item from './Faq_Item'


const FAQ = () => {
    return (
        <section className={styles['faq']}>
            <div className={styles['faq__container']}>
                <h1 className={styles['faq__title']}>Часто задаваемые вопросы</h1>

                <ul className={styles['faq__list']}>

                    {
                        homeFaqData.map((item) => 
                            <FAQ_Item key={item.id}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default FAQ
