import { Checkbox } from '@/components/ui/checkbox';
import styles from './profile-edit-stage.module.scss'
import { useState } from 'react';

type Props = {
    text: string
}

const ProfileEditCheckItem= ({ text }: Props) => {
    const [checked, setChecked] = useState(false);

    return (
        <div  onClick={() => setChecked(prev => !prev)} className={styles['profile-edit-stage__check-item']}>
            <Checkbox checked={checked} className='border-[2px] w-[24px] h-[24px]' />

            <span className={styles['profile-edit-stage__check-title']}>
                {text}
            </span>
        </div>
    )
}

export default ProfileEditCheckItem;
