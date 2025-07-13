import { RadioGroupItem } from '@/components/ui/radio-group';
import styles from './RadioItem.module.scss';
import { useEffect, useRef, useState } from 'react';

type Props = {
  id: string,
  name: string,
  value: string,
}

const RadioItem: React.FC<Props> = ({ id, name, value }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new MutationObserver(() => {
      setIsChecked(el.getAttribute('data-state') === 'checked');
    });

    observer.observe(el, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={styles['radio-item']}
      data-state={isChecked ? 'checked' : undefined}
    >
      <label className={styles['radio-item__label']} htmlFor={id}>
        {name}
      </label>
      <RadioGroupItem
        ref={ref}
        className='!w-[24px] !h-[24px] border-[#8D46F6] border-[2px]'
        value={value}
        id={id}
      />
    </div>
  );
};

export default RadioItem;
