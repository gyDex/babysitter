import { useEditStage } from '@/entities/stores/useEditStage';
import styles from './profile-edit-stage.module.scss';

const ProfileEditSevenStage = () => {
    const stage = useEditStage();
    

    return (
        <div className={styles['profile-edit-stage']}>
            <div className={styles['profile-edit-stage__top']}>
                <div className={styles['profile-edit-stage__top-row']}>
                <div className={styles['profile-edit-stage__top-item']}></div>
                <div className={styles['profile-edit-stage__top-item']}></div>
                <div className={styles['profile-edit-stage__top-item']}></div>
                <div className={styles['profile-edit-stage__top-item']}></div>
                <div className={styles['profile-edit-stage__top-item']}></div>
                <div className={styles['profile-edit-stage__top-item']}></div>
                <div className={styles['profile-edit-stage__top-item_active']}></div>
                </div>

                <span className={styles['profile-edit-stage__top-description']}>шаг 7/7</span>
            </div>

            <h2 className={styles['profile-edit-stage__title']}>Ваши контактные данные</h2>

            <span className={styles['profile-edit-stage__description']}>Укажите ваши фамилия, имя и почту, чтобы мы могли с вами связаться</span>

            <div className='flex w-full gap-[24px] max-[768px]:flex-col'>
                <div className='w-full'>
                    <input className='mb-[8px] h-fit border-1 border-[#D9D9D9] w-full px-[16px] py-[18px] rounded-[16px] text-[#D9D9D9] text-[18px] leading-[24px] font-normal' placeholder='Петрова Полина'  />
                    <span className={styles['profile-edit-stage__description']}>Напишите ваше имя и фамилию</span>
                </div>
                
                <div className='w-full'>
                    <input className='mb-[8px] h-fit border-1 border-[#D9D9D9] w-full px-[16px] py-[18px] rounded-[16px] text-[#D9D9D9] text-[18px] leading-[24px] font-normal' placeholder='example@yandex.ru'  />
                    <span className={styles['profile-edit-stage__description']}>Укажите вашу почту</span>
                </div>

                <div className='w-full'>
                    <input className='mb-[8px] h-fit border-1 border-[#D9D9D9] w-full px-[16px] py-[18px] rounded-[16px] text-[#D9D9D9] text-[18px] leading-[24px] font-normal' placeholder='г. Москва, м. Братиславская'  />
                    <span className={styles['profile-edit-stage__description']}>Место жительство (можете указать район)</span>
                </div>
            </div>

            
            <div className={styles['profile-edit-stage__bottom']}>
                <button onClick={() => stage.setStage('six')} className={styles['profile-edit-stage__btn-bottom_prev']}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.88065 3.95312L2.83398 7.99979L6.88065 12.0465" stroke="#431DED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.1673 8H2.94727" stroke="#431DED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                Назад
                </button>

                <button onClick={() => stage.setStage('seven')} className={styles['profile-edit-stage__btn-bottom']}>
                Сохранить
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.61935 3.95312L13.666 7.99979L9.61935 12.0465" stroke="#431DED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.33273 8H13.5527" stroke="#431DED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
            </div>
        </div>
    )
}

export default ProfileEditSevenStage;
