'use client'

import { useEditBabysitterStage } from '@/entities/stores/useEditBabysitterStage';
import React, {  } from 'react'
import ProfileEditOneStage from './stages/profile-edit-1';
import ProfileEditTwoStage from './stages/profile-edit-2';
import ProfileEditThreeStage from './stages/profile-edit-3';
import ProfileEditFourStage from './stages/profile-edit-4';
import ProfileEditFiveStage from './stages/profile-edit-5';
import ProfileEditSixStage from './stages/profile-edit-6';
import ProfileEditSevenStage from './stages/profile-edit-7';
import ProfileEditEightStage from './stages/profile-edit-8';
import ProfileEditNineStage from './stages/profile-edit-9';
import ProfileEditTenStage from './stages/profile-edit-10';
import FinalStage from '@/widgets/FinalStage/FinalStage';
import MobileModal from '@/widgets/MobileModal/MobileModal';
import Image from 'next/image';
import styles from './response.module.scss';
import { useRouter } from 'next/navigation';
import ProfileEditElevenStage from './stages/profile-edit-11';
import ProfileEditTwelveStage from './stages/profile-edit-12';
import Popup from '@/widgets/Popup/Popup';
import VideoPlayer from '@/widgets/VideoPlayer/VideoPlayer';
import { useMobileState } from '@/entities/stores/useMobileModal';

const ResponsePage = () => {
  const stage = useEditBabysitterStage();

  const mobileState = useMobileState();

  const router = useRouter();

  return (
    <div className="mt-[120px] w-full flex justify-center relative">
      <div className="min-[768px]:hidden">
        <MobileModal

          btn={false}
          title="Данные успешно сохранены"
          onClose={() => mobileState.setOpen(true, 'confirmation')}
          isOpen={mobileState.type === 'success' && mobileState.isOpen}
          setOpen={mobileState.setOpen}
        >
          <Image
            quality={100}
            height={159}
            width={169}
            className="max-[1024px]:h-[120px] max-[1024px]:right-[43px] max-[1024px]:bottom-[40px] max-[1024px]:w-[130px] w-[169px] h-[159px] object-cover absolute bottom-[-35px] right-[129px]"
            src="/images/final-stage/cup.png"
            alt="cup"
          />
          <Image
            quality={100}
            height={159}
            width={169}
            className="max-[1024px]:rotate-[45deg] max-[1024px]:h-[90px] max-[1024px]:w-[90px] max-[1024px]:left-[80px] max-[1024px]:top-auto max-[1024px]:bottom-[70px] w-[169px] h-[159px] object-cover absolute left-[242px]"
            src="/images/final-stage/star.png"
            alt="star"
          />

          <div className="z-[10] relative !w-full pb-[190px] flex justify-center items-center !h-full">
            <div className="w-fit flex justify-center items-center flex-col">
              <span className="font-[onest] font-normal text-[16px] leading-[22px] text-center text-[#7C8092]">
                Ответы на дальнейшие вопросы могут занять до 30 минут вашего времени, но эти данные необходимы, чтобы родители узнали о вас больше
              </span>

              <div className="z-[10] relative flex max-[1024px]:!flex-col gap-[12px] w-full items-center mt-[31px]">
                <button
                  onClick={() => {
                    stage.setStage('eleven')
                }}
                  className={styles['final-stage__btn-bottom_prev']}
                >
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.88065 3.95312L2.83398 7.99979L6.88065 12.0465" stroke="#431DED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.1673 8H2.94727" stroke="#431DED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Вернуться к редактированию
                </button>

                <button
                    onClick={() => router.push('')}
                  type="button"
                  className="shrink-0 max-[1024px]:w-full text-[onest] text-[#431DED] font-medium text-[14px] leading-[18px] bg-[#E8E5F9] pt-[6px] pb-[8px] px-[12px] rounded-[8px]"
                >
                  На главную
                </button>
              </div>
            </div>
          </div>
        </MobileModal>

        <MobileModal
          btn={false}
          title="Ваши данные приняты "
          onClose={() => mobileState.setOpen(true,'success')}
          isOpen={mobileState.type === 'accepted' && mobileState.isOpen}
          setOpen={mobileState.setOpen}
        >

          <div className="z-[10] relative !w-full flex justify-center items-center !h-full">
            <div className="w-fit flex justify-center items-center flex-col">
                <p className='mb-[12px] text-[16px] font-[onest] leading-[22px] font-normal text-left'>Нам понадобится около 2-х часов для проверки вашего аккаунта. В это время рекомендуем пройти обучение</p>
              
              <span className="font-[onest] font-normal text-[16px] leading-[22px] text-[#7C8092]">
                Обучающий видеоурок поможет вам быстрее находить общий язык с детьми и их родителями. Это обязательный этап перед началом работы.
              </span>

            <div className='h-[265px] mt-[12px] mb-[24px] w-full relative'>
                    <VideoPlayer height='100%' videoUrl="/images/video-block/video.mp4" />
            </div>

              <div className="z-[10] relative flex max-[1024px]:!flex-col gap-[12px] w-full items-center">
                <button
                    onClick={() => router.push('')}
                  type="button"
                  className="shrink-0 max-[1024px]:w-full text-[onest] text-[#431DED] font-medium text-[14px] leading-[18px] bg-[#E8E5F9] pt-[6px] pb-[8px] px-[12px] rounded-[8px]"
                >
                  Урок просмотрен
                </button>
              </div>
            </div>
          </div>
        </MobileModal>
      </div>

        <Popup   styleMain={{
          minHeight: '226px',
        }} top={false}  isOpen={mobileState.type === 'confirmation' && mobileState.isOpen} className='popup-inner' isNotBtn cross={true} setOpen={mobileState.setOpen}  title={false}>
          <div>

            <Image
              quality={100}
              height={159}
              width={169}
              className="max-[1024px]:h-[120px] max-[1024px]:right-[43px] max-[1024px]:bottom-[40px] max-[1024px]:w-[130px] w-[169px] h-[159px] object-cover absolute bottom-[-35px] right-[32px]"
              src="/images/final-stage/cup.png"
              alt="cup"
            />
            <Image
              quality={100}
              height={94}
              width={169}
              className="max-[1024px]:rotate-[45deg] max-[1024px]:w-[90px] top-[8px] max-[1024px]:top-auto w-[120px] h-[120px] object-cover absolute left-[82px]"
              src="/images/final-stage/star.png"
              alt="star"
            />

            <div className=" z-[10] relative !w-full  flex justify-center items-center !h-full">
              <div className="w-fit flex justify-center items-center flex-col">

                <div className='w-full min-w-[1008px] flex justify-center'>
                  <div className='w-full max-w-[663px] flex items-center flex-col h-full'>
                    <h1 className='w-full text-[28px] leading-[26px] font-semibold font-[onest] text-center mb-[24px]'>
                      Данные успешно сохранены
                    </h1>

                    <span className="block font-[onest] font-normal text-[16px] leading-[22px] text-center text-[#7C8092]">
                        Ответы на дальнейшие вопросы могут занять до 30 минут вашего времени, но эти данные необходимы, чтобы родители узнали о вас больше
                      </span>

                    <div className=" z-[10] mt-[32px] relative flex gap-[12px] w-full justify-center mt-[31px]">
                        <button
                          onClick={() => {
                            router.push('/')
                            mobileState.setOpen(false, '')  
                        }}
                          style={{
                            width: 'fit-content',
                            marginLeft: '0px'
                          }}
                          className={styles['final-stage__btn-bottom_prev']}
                        >
                          На главную
                        </button>

                        <button
                            onClick={() => {
                              router.push('')
                              mobileState.setOpen(false, '')
                            }}
                          type="button"
                          className="shrink-0 flex items-center  gap-[8px] justify-center max-[1024px]:w-full text-[onest] text-[#431DED] font-medium text-[14px] leading-[18px] bg-[#E8E5F9] pt-[6px] pb-[8px] px-[12px] rounded-[8px]"
                        >
                          Продолжить

                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.61935 3.95312L13.666 7.99979L9.61935 12.0465" stroke="#431DED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33273 8H13.5527" stroke="#431DED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>

                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popup>

        <Popup onClose={() => mobileState.setOpen(true, 'confirmation')}  isOpen={mobileState.type === 'accepted' && mobileState.isOpen} isNotBtn cross={true} setOpen={mobileState.setOpen}   title="Ваши данные приняты">
            <div className='flex gap-[32px]'>
                <div className='flex flex-col'>
                    <p className='w-[437px] text-[16px] font-[onest] leading-[22px] font-normal'>Нам понадобится около 2-х часов для проверки вашего аккаунта. В это время рекомендуем пройти обучение</p>

                    <span className='mt-[23px] text-[#7C8092] text-[14px] leading-[18px]  block font-normal max-w-[437px]'>Обучающий видеоурок поможет вам быстрее находить общий язык с детьми и их родителями. Это обязательный этап перед началом работы.</span>

                    <button className={'font-[onest] w-fit mt-auto text-[14px] leading-[18px] font-medium py-[6px] px-[12px] text-[#431DED] bg-[#E8E5F9] rounded-[8px]'}>
                        Урок просмотрен
                    </button>
                </div>

                <div className='h-[239px] w-[177px] relative'>
                    <div className='absolute bottom-0 right-[20px] w-full h-[284px]'>
                        <VideoPlayer height='' videoUrl="/images/video-block/video.mp4" />
                    </div>
                </div>

            </div>
        </Popup>

      <div className="w-full max-w-[1200px]">
        <h1 className="font-[onest] font-semibold text-[40px] leading-[48px] text-[#191816]">Создайте анкету за 5 минут</h1>

        <div className="mt-[32px] p-[32px] bg-[white] rounded-[16px] max-[768px]:p-[16px]">
          {stage.stage === 'first' && <ProfileEditFiveStage />}
          {stage.stage === 'second' && <ProfileEditOneStage />}
          {stage.stage === 'three' && <ProfileEditTwoStage />}
          {stage.stage === 'four' && <ProfileEditThreeStage />}
          {stage.stage === 'five' && <ProfileEditFourStage />}
          {stage.stage === 'six' && <ProfileEditSixStage />}
          {stage.stage === 'seven' && <ProfileEditSevenStage />}
          {stage.stage === 'eight' && <ProfileEditEightStage />}
          {stage.stage === 'nine' && <ProfileEditNineStage />}
          {stage.stage === 'ten' && <ProfileEditTwelveStage />}
          {stage.stage === 'eleven' && <ProfileEditTenStage />}
          {stage.stage === 'twelve' && <ProfileEditElevenStage />}
          {stage.stage === 'final' && <FinalStage />}
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;
