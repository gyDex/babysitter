'use client'

import { RadioGroup } from "@/components/ui/radio-group"
import { useMobileState } from "@/entities/FAQ/stores/useMobileModal"
import BeforePay from "@/widgets/BeforePay/BeforePay"
import CardBabysitterList from "@/widgets/CardBabysitterList/CardBabysitterList"
import Changes from "@/widgets/Changes/Changes"
import FAQ from "@/widgets/Faq/Faq"
import Footer from "@/widgets/Footer/Footer"
import Form_Home from "@/widgets/Form_Home/Form_Home"
import Guarantees from "@/widgets/Guarantees/Guarantees"
import HeaderMenu from "@/widgets/HeaderMenu/HeaderMenu"
import Main__Hero from "@/widgets/main__hero/main__hero"
import MobileModal from "@/widgets/MobileModal/MobileModal"
import Popup from "@/widgets/Popup/Popup"
import RadioItem from "@/widgets/RadioItem/RadioItem"
import Reviews from "@/widgets/Reviews/Reviews"
import SelectModal from "@/widgets/SelectModal/SelectModal"
import Solutions from "@/widgets/Solutions/Solutions"
import VideoBlock from "@/widgets/VideoBlock/VideoBlock"
import { useState } from "react"

export const HomePage = () => {
    const mobileState = useMobileState();
  const [selectedValue, setSelectedValue] = useState<string>('');
    return (
        <>
            <HeaderMenu />

            <div className="min-[1200px]:hidden">
                <MobileModal title={'Выбор роли'} isOpen={mobileState.isOpen && mobileState.type === ''} next={() => mobileState.setOpen(true, 'city')} setOpen={mobileState.setOpen}>
                    <RadioGroup>
                        <div className="mt-[16px] flex gap-[12px] flex-col" role="radiogroup" aria-label="Example radio group">
                            <RadioItem
                                id="baby"
                                name="Я няня, ищу работу"
                                value="Я няня, ищу работу"
                                checked={selectedValue === '1'}
                                onChange={() => setSelectedValue('1')}
                            />
                            <RadioItem
                                id="parent"
                                name="Я родитель, ищу няню"
                                value="Я родитель, ищу няню"
                                checked={selectedValue === '2'}
                                onChange={() => setSelectedValue('2')}
                            />
                            </div>
                    </RadioGroup>
                </MobileModal>

                <MobileModal title={'Ваш город'} isOpen={mobileState.isOpen && mobileState.type === 'city'} next={() => mobileState.setOpen(false, '')} setOpen={mobileState.setOpen}>
                    <SelectModal title='Москва и МО' items={[
                        {
                            name: 'Москва и МО',
                            id: 'city1',
                        },
                        {
                            name: 'Санкт-Петербург',
                            id: 'city2',
                        },
                        {
                            name: 'Екатеринбург',
                            id: 'city3',
                        }
                    ]}          
                    />
                </MobileModal>
            </div>

            <Popup isOpen={mobileState.isOpen && mobileState.type === ''} next={() => mobileState.setOpen(true, 'role')} setOpen={mobileState.setOpen}  title="Ваш город">
                <SelectModal className="!mt-[0px]" title='Москва и МО' items={[
                    {
                        name: 'Москва и МО',
                        id: 'city1',
                    },
                    {
                        name: 'Санкт-Петербург',
                        id: 'city2',
                    },
                    {
                        name: 'Екатеринбург',
                        id: 'city3',
                    }
                ]}          
                />
            </Popup>

            <Popup isOpen={mobileState.isOpen && mobileState.type === 'role'} next={() => mobileState.setOpen(false, '')} setOpen={mobileState.setOpen}  title="Ваша роль">
                <RadioGroup>
                    <div className="flex gap-[12px] flex-col" role="radiogroup" aria-label="Example radio group">
                        <RadioItem
                            id="baby"
                            name="Я няня, ищу работу"
                            value="Я няня, ищу работу"
                            checked={selectedValue === '1'}
                            onChange={() => setSelectedValue('1')}
                        />
                        <RadioItem
                            id="parent"
                            name="Я родитель, ищу няню"
                            value="Я родитель, ищу няню"
                            checked={selectedValue === '2'}
                            onChange={() => setSelectedValue('2')}
                        />
                        </div>
                </RadioGroup>
            </Popup>


            <Main__Hero />
            <Guarantees />
            <CardBabysitterList />
            <Changes />

            <div className="block_beige">
                <Solutions />   
                <BeforePay />
                <VideoBlock />
                <Reviews />
                <Form_Home />
                <FAQ />
            </div>
            
            <Footer />
        </>
    )
}
