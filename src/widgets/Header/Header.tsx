import Image from 'next/image';
import styles from './Header.module.scss'
import Link from 'next/link';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__inner}>
                <Link href={'/'}>
                     <Image src={'/images/header/logo.svg'} alt="Logo" width={186} height={37} />
                </Link>

                <nav className={styles.header__nav}>
                    <ul className={styles['header__nav-list']}>
                        <li className={styles['header__nav-item']}>
                            <Link href={'/'}>
                                О нас
                            </Link>
                        </li>
                        <li className={styles['header__nav-item']}>
                            <Link href={'/'}>
                                Регистрация для нянь
                            </Link>
                        </li>
                        <li className={styles['header__nav-item']}>
                            <Link href={'/'}>
                                База нянь
                            </Link>
                        </li>
                        <li className={styles['header__nav-item']}>
                            <Link href={'/'}>
                                Об основателе
                            </Link>
                        </li>
                        <li className={styles['header__nav-item']}>
                            <Link href={'/'}>
                                Этапы работ
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button className={styles['header__btn']}>
                     <Image src={'/images/header/burger.svg'} alt="Logo" width={42} height={42} />
                </button>
            </div>
        </div>
    )
}

export default Header
