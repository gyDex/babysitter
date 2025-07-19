import styles from './Popup.module.scss'

import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/shared/compontents/Button'
import { CSSProperties } from 'react'

const Popup = ({
  isOpen,
  setOpen,
  children,
  title,next,
  btnTitle = 'Сохранить',
  style,
  cross = false,
  className,
}: {
  isOpen: boolean
  setOpen: (open: boolean, type:string) => void,
  next: () => void,
  children?: React.ReactNode,
  title: string | boolean,
  btnTitle?: string,
  style?: CSSProperties | undefined ,
  cross?: boolean,
  className?: string,
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
                    <div className={`${styles.overlay} ${className || ''}`} style={style} onClick={handleOverlayClick}>
                        <motion.div
                            onClick={stopClickPropagation}
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: 'easeInOut' }}
                        >
                            <div className={!cross ? styles['popup__inner'] : styles['popup__inner-cross']}>
                                <button onClick={handleOverlayClick} className={styles['popup__cross']}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L4 12" stroke="#252525" 
strokeWidth="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4 4L12 12" stroke="#252525" 

strokeWidth="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>

                                <div className={styles['popup__content']}> {
                                        
                                        <div  className={styles['popup__top-content']}>
                                            {
                                                title !== false &&
                                                <div className={styles['popup__content-top']}>
                                                    <h2 className={styles['popup__title']}>{title}</h2>
                                                </div>
                                            }
                
                                            {children}
                                        </div>
                                    }
            
                                    <div className={styles['popup__bottom']}>
                                        <Button  onClick={next} text={btnTitle} variation="second" type="button" />
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
