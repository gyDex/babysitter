'use client'

import { RadioGroup } from '@radix-ui/react-radio-group';
import styles from './profile-edit-stage.module.scss';
import RadioItem from '@/widgets/RadioItem/RadioItem';
import React, { useState } from 'react';

type Props = {
    index?: string | number,
}

export const ProfileEditOneStageItem: React.FC<Props> = ({index}) => {
  const [selectedValue, setSelectedValue] = useState<'male' | 'female'>();

  return (

    <div key={index} className={styles['profile-edit-stage__item']}>
        <div>
            <span className={styles['profile-edit-stage__item-label']}>Укажите пол ребенка</span>

            <div className='min-w-[336px] flex flex-col gap-[12px]'>
            <RadioGroup>
                <div className="max-[768px]:mb-[16px] min-[768px]:flex-row flex gap-[12px] flex-col" role="radiogroup">
                    <RadioItem
                        style={{
                            width: '100%',
                        }}
                        id="baby"
                        name="Мужской"
                        value="Мужской"
                        checked={selectedValue === 'male'}
                        onChange={() => setSelectedValue('male')}
                    />
                    <RadioItem
                        style={{
                            width: '100%',
                        }}
                        id="parent"
                        name="Женский"
                        value="Женский"
                        checked={selectedValue === 'female'}
                        onChange={() => setSelectedValue('female')}
                    />
                </div>
            </RadioGroup>
            </div>
        </div>

        <div className={styles['profile-edit-stage__right']}>
            <div className={styles['profile-edit-stage__input-wrap']}>
            <span className={styles['profile-edit-stage__item-label']}>Укажите возраст ребенка</span>

            <input className={styles['profile-edit-stage__item-input']} placeholder='Возраст'  />
            </div>
            
        </div>
    </div>       
  )
}
