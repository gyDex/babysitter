import styles from './Popup.module.scss'

import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/shared/compontents/Button'

const Popup = ({
  isOpen,
  setOpen,
  children,
  title,next
}: {
  isOpen: boolean
  setOpen: (open: boolean, type:string) => void,
  next: () => void,
  children?: React.ReactNode,
  title: string,
}) => {
    const handleOverlayClick = () => {
        setOpen(false, '')
    }

    const stopClickPropagation = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    return (
            <AnimatePresence>
            {
                isOpen && (
                    <div className={styles.overlay} onClick={handleOverlayClick}>
                        <motion.div
                            onClick={stopClickPropagation}
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: 'easeInOut' }}
                        >
                            <div className={styles['popup__inner']}>
                                <div className={styles['popup__content']}>
                                    <div  className={styles['popup__top-content']}>
                                        <div className={styles['popup__content-top']}>
                                            <h2 className={styles['popup__title']}>{title}</h2>
                                        </div>
            
                                        {children}
                                    </div>
            
                                    <div  className={styles['popup__bottom']}>
                                        <Button onClick={next} text="Сохранить" variation="second" type="button" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                )
            }
        </AnimatePresence>
    )
}

export default Popup
