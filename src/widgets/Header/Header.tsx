'use client'

import Image from 'next/image';
import styles from './Header.module.scss'
import Link from 'next/link';
import { useHeader } from '@/entities/FAQ/stores/useHeader';

const Header = () => {
    const headerState = useHeader();
  console.log(headerState.isOpenMenu)

    return (
        <div className={styles.header}>
            <div className={headerState.isTransparent ? styles['header__inner_transparent'] : styles.header__inner}>
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

                <button onClick={() => {
                    headerState.toggleTransparent();
                    headerState.toggleHeaderMenu();}} className={styles['header__btn']}>
                        {
                            !headerState.isOpenMenu ? 
                            <Image src={'/images/header/burger.svg'} alt="Logo" width={42} height={42} />
                            :
                            <Image src={'/images/header/close.svg'} alt="Logo" width={42} height={42} />
                        }
                </button>
            </div>
        </div>
    )
}

export default Header
