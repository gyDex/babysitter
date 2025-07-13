'use client'

import Image from 'next/image'
import styles from './Button.module.scss'
import { useState } from 'react'

type Props = {
    type: 'submit' | 'button',
    variation?: 'second',
    text: string,
    onClick?: () => void,
}

const Button:React.FC<Props> = ({variation, text, onClick}) => {
    const [isHover, setHover] = useState(false);

    return (
        <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
        className={variation === 'second' ? styles['button-sec'] : styles['button']}
        >
            {text}

            {
                isHover ?
                <Image className={styles['button__image']} src={'/images/main-hero/heart.png'} alt="heart" width={38} height={38} />
                :
                <Image className={styles['button__image']} src={'/images/main-hero/heart4.png'} alt="heart" width={22} height={22} />
            }
        </button>
    )
}

export default Button
