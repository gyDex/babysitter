import Image from 'next/image'
import styles from './main__hero.module.scss'

const Main__Hero = () => {
  return (
    <section className={styles['main-hero']}>
        <div className={styles['main-hero__bg']}>
          <video
            src="/images/main-hero/video.mp4"
            width={100}
            height={100}
            autoPlay
            loop
            muted
            playsInline
          >
            Ваш браузер не поддерживает видео.
          </video>
        </div>

        <div className={styles['main-hero__inner']}>
          <h1 className={styles['main-hero__title']}>Поможем найти няню, которой можно доверить самое дорогое</h1>

          <div className={styles['main-hero__block']}>
              <div className={styles['main-hero__top']}>
                  <Image className={styles['main-hero__top-image']} src={'/images/main-hero/image1.gif'} 
                  alt="heart" width={124} height={90} />

                  <p className={styles['main-hero__description']}>Подобрали более 3 000 нянь, которые любят детей не по инструкции, а по-настоящему</p>
              </div>

              <button className={styles['main-hero__btn']}>
                  Найти няню

                  <Image src={'/images/main-hero/heart.png'} alt="heart" width={22} height={22} />
              </button>
          </div>
        </div>

    </section>
  )
}

export default Main__Hero
