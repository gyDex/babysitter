import { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


type Props = {
  items: Item[],
  title: string,
}

type Item = {
  name: string
  id: string,
}


const SelectModal:React.FC<Props> = ({items, title})  => {
  const [isOpen, setOpen] = useState(false) as any;    

  return (
    <Select  open={isOpen} onOpenChange={() => setOpen((prev: boolean) => !prev)}>
      <SelectTrigger   className="select !text-[18px] !font-normal !mt-[16px] !shadow-none w-full min-h-[60px] flex items-center !text-[#D9D9D9] bg-[#FFFFFF] !border-[1px] !border-[#D4D4DD] rounded-[16px] max-[425px]:!mb-[0px] max-[425px]:mt-[24px]">
        <SelectValue placeholder={title} />
        {
          !isOpen ?
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.56802 7.11381C5.07857 6.7311 4.37153 6.81762 3.98881 7.30708C3.6061 7.79653 3.69262 8.50357 4.18208 8.88629L9.30288 12.8904C9.70989 13.2086 10.2813 13.2087 10.6885 12.8906L15.8134 8.88656C16.303 8.50403 16.3898 7.79703 16.0073 7.30743C15.6248 6.81782 14.9178 6.73102 14.4282 7.11354L9.99613 10.5763L5.56802 7.11381Z" fill="#D9D9D9"/>
            </svg>

          :
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.56802 12.8862C5.07857 13.2689 4.37153 13.1824 3.98881 12.6929C3.6061 12.2035 3.69262 11.4964 4.18208 11.1137L9.30288 7.10963C9.70989 6.79138 10.2813 6.79126 10.6885 7.10935L15.8134 11.1134C16.303 11.496 16.3898 12.203 16.0073 12.6926C15.6248 13.1822 14.9178 13.269 14.4282 12.8865L9.99613 9.42373L5.56802 12.8862Z" fill="#D9D9D9"/>
</svg>

        }
      </SelectTrigger>
      <SelectContent className="select !bg-[#FFFFFF]  w-full z-[1000] min-w-[214px] border-[#7C8092] border-[1px] rounded-[16px]">
        <SelectGroup>
          {
              items.map((item, i) => <>
                  <SelectItem key={i} className="!text-[#7C8092]  bg-transparent focus-within:!bg-transparent hover:!bg-transparent flex justify-between items-center" value={item.id}>
                    {item.name}
                    

                    </SelectItem>
              </>)
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectModal
