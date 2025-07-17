'use client'
import { useState } from 'react'
import styles from './PhoneStage.module.scss'
import clsx from 'clsx';
import Button from '@/shared/compontents/Button';

const PhoneStage = () => {
    const [role, setRole] = useState<'babysitter' | 'parent'>('babysitter');

    return (
        <section className={styles['phone-stage']}>
            <h1 className={styles['phone-stage__title']}>Вход и регистрация</h1>

            <div className={styles['phone-stage__roles']}>
                <button onClick={() => setRole('parent')} className={clsx('', {
                    [styles['phone-stage__role']]: role === 'babysitter',
                    [styles['phone-stage__role_active']]: role === 'parent',
                })}>
                    Я мама
                </button>

                <button onClick={() => setRole('babysitter')} className={clsx('', {
                    [styles['phone-stage__role']]: role === 'parent',
                    [styles['phone-stage__role_active']]: role === 'babysitter',
                })}>
                    Я няня
                </button>
            </div>

            <div className={styles['phone-stage__bottom']}>
                <input type="text" placeholder='Номер телефона' className={styles['phone-stage__input']} />

                <Button style={{
                    marginTop: '0px',
                }} text='Продолжить' variation='second' type='button' />
            </div>
        </section>
    )
}

export default PhoneStage
