'use client'

import Button from '@/shared/compontents/Button'
import styles from './MobileModal.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

const MobileModal = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean
  setOpen: (open: boolean) => void
}) => {
  const handleOverlayClick = () => {
    setOpen(false)
  }

  const stopClickPropagation = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <motion.div
            className={styles.modal}
            onClick={stopClickPropagation}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={styles['modal-mobile__top']}>
                <div className={styles['modal-mobile__top-line']}></div>
            </div>

            <div className={styles['modal-mobile__content']}>
                <div className={styles['modal-mobile__content-top']}>
                    <h2 className={styles['modal-mobile__title']}>Ваш город</h2>
                    <button onClick={handleOverlayClick} className={styles['mobile-modal__content-btn']}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="8" fill="#EFF0F5"/>
                            <path d="M20 12L12 20" stroke="#191816" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 12L20 20" stroke="#191816" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <Button text="Сохранить" variation="second" type="button" />
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default MobileModal
