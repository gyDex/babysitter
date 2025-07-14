import { RadioGroupItem } from '@/components/ui/radio-group'; // твой кастомный радио
import styles from './RadioItem.module.scss';

type Props = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
};

const RadioItem: React.FC<Props> = ({ id, name, value, checked, onChange }) => {
  return (
    <div
      className={styles['radio-item']}
      data-state={checked ? 'checked' : undefined}
      onClick={onChange} // переключаем по клику на обертку
      role="radio"
      aria-checked={checked}
      tabIndex={checked ? 0 : -1}
    >
      <label className={styles['radio-item__label']} htmlFor={id}>
        {name}
      </label>
      <RadioGroupItem
        className="!w-[24px] !h-[24px] border-[#8D46F6] border-[2px]"
        value={value}
        id={id}
        checked={checked} 
      />
    </div>
  );
};

export default RadioItem;
