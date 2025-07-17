'use client';

import { useState } from 'react'
import styles from './CodeStage.module.scss'
import clsx from 'clsx';
import Button from '@/shared/compontents/Button';

const CodeStage = () => {
    const [role, setRole] = useState<'babysitter' | 'parent'>('babysitter');

    return (
        <section className={styles['code-stage']}>
            <h1 className={styles['code-stage__title']}>Вход и регистрация</h1>

            <div className={styles['code-stage__roles']}>
                <button onClick={() => setRole('parent')} className={clsx('', {
                    [styles['code-stage__role']]: role === 'babysitter',
                    [styles['code-stage__role_active']]: role === 'parent',
                })}>
                    Я мама
                </button>

                <button onClick={() => setRole('babysitter')} className={clsx('', {
                    [styles['code-stage__role']]: role === 'parent',
                    [styles['code-stage__role_active']]: role === 'babysitter',
                })}>
                    Я няня
                </button>
            </div>

            <div className={styles['code-stage__bottom']}>
                <input type="text" placeholder='Номер телефона' className={styles['code-stage__input']} />

                <Button style={{
                    marginTop: '0px',
                }} text='Продолжить' variation='second' type='button' />
            </div>
        </section>
    )
}

export default CodeStage
