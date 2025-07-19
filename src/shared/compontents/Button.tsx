'use client'

import Image from 'next/image'
import styles from './Button.module.scss'
import { CSSProperties, useState } from 'react'

type Props = {
    type: 'submit' | 'button',
    variation?: 'second' | 'three',
    text: string,
    onClick?: () => void,
    style?: CSSProperties,
}

const Button:React.FC<Props> = ({variation,style, text, onClick}) => {
    const [isHover, setHover] = useState(false);

    return (
        <button style={style} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
        className={variation === 'second' ? styles['button-sec'] : variation === 'three' ?  styles['button-three'] : styles['button']}
        >
            {text}

            {
                variation !== 'three' && ( isHover ?
                <Image className={styles['button__image']} src={'/images/main-hero/heart.png'} alt="heart" width={38} height={38} />
                :
                <Image className={styles['button__image']} src={'/images/main-hero/heart4.png'} alt="heart" width={22} height={22} />
                )
            }

            {
                variation === 'three' && <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0001 18.3334C14.6025 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6025 1.66669 10.0001 1.66669C5.39771 1.66669 1.66675 5.39765 1.66675 10C1.66675 14.6024 5.39771 18.3334 10.0001 18.3334Z" stroke="white"
strokeWidth="1.66667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.94995 12.9416L11.8833 9.99996L8.94995 7.05829" stroke="white"
strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            }
        </button>
    )
}

export default Button
