'use client'

import { RadioGroup } from "@/components/ui/radio-group"
import { useMobileState } from "@/entities/stores/useMobileModal"
import { setRoleCookies } from "@/features/setRoleCookie"
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
import {SelectModal} from "@/widgets/SelectModal/SelectModal"
import Solutions from "@/widgets/Solutions/Solutions"
import VideoBlock from "@/widgets/VideoBlock/VideoBlock"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation"
import { cities } from "@/entities/cities"
import { setCityCookies } from "@/features/setCityCookies"
import Cookies from 'js-cookie'

export const HomePage = () => {
    const mobileState = useMobileState();
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [selectCity, setSelectCity] = useState<string>('');

    const [role, setRole] = useState<string | undefined>()
    const [city, setCity] = useState<string | undefined>()
    const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const roleCookie = Cookies.get('role')
    const cityCookie = Cookies.get('city')

    setRole(roleCookie)
    setCity(cityCookie)
    setLoaded(true)

    console.log('Role:', roleCookie)
    console.log('City:', cityCookie)
  }, [])
    const router = useRouter();

    if (!loaded) return null  

    return (
        <>
            <HeaderMenu />

            <div className="min-[1200px]:hidden">
                <MobileModal title={'Выбор роли'} isOpen={
                  (role === undefined && mobileState.isOpen && mobileState.type === 'role') || 
                  (role === undefined && city !== undefined && mobileState.isOpen)
                } next={() => 
                {
                  if(selectCity !== '') {
                    mobileState.setOpen(true, 'role')
                    setCityCookies('city', selectCity)
                  }
                }} setOpen={mobileState.setOpen}>
                    <RadioGroup>
                        <div className="mt-[16px] flex gap-[12px] flex-col" role="radiogroup" aria-label="Example radio group">
                            <RadioItem
                                id="baby"
                                name="Я няня, ищу работу"
                                value="Я няня, ищу работу"
                                checked={selectedValue === 'baby'}
                                onChange={() => setSelectedValue('baby')}
                            />
                            <RadioItem
                                id="parent"
                                name="Я родитель, ищу няню"
                                value="Я родитель, ищу няню"
                                checked={selectedValue === 'parent'}
                                onChange={() => setSelectedValue('parent')}
                            />
                            </div>
                    </RadioGroup>
                </MobileModal>

                <MobileModal title={'Ваш город'} isOpen={
                  (city === undefined && mobileState.isOpen && mobileState.type === '') ||
                  (city === undefined && role !== undefined && mobileState.isOpen)
                } next={() => 
                {
                  if (selectedValue !== '') {
                    mobileState.setOpen(false, '')
                    setRoleCookies('role', selectedValue)
                    if (selectedValue === 'baby') {
                      router.push('babysitter')
                    }
                    else {
                      router.push('/')
                    }
                  }
                }} setOpen={mobileState.setOpen}>
                  <SelectModal callbackChange={setSelectCity} title='Москва и МО' items={cities}    
                    />
                </MobileModal>
            </div>

            <Popup isOpen={
                  (city === undefined && mobileState.isOpen && mobileState.type === '') ||
                  (city === undefined && role !== undefined && mobileState.isOpen)
                }next={() => 
                {
                  if(selectCity !== '') {
                    mobileState.setOpen(true, 'role')
                    setCityCookies('city', selectCity)
                  }
                }} setOpen={mobileState.setOpen}  title="Ваш город">
                <SelectModal callbackChange={setSelectCity} className="!mt-[0px] !max-h-[50px]" title='Москва и МО' items={cities}          
                />
            </Popup>

            <Popup isOpen={
                  (role === undefined && mobileState.isOpen && mobileState.type === 'role') || 
                  (role === undefined && city !== undefined && mobileState.isOpen)
                }  next={() => {
                  if (selectedValue !== '') {
                    mobileState.setOpen(false, '')
                    setRoleCookies('role', selectedValue)
                    if (selectedValue === 'baby') {
                      router.push('babysitter')
                    }
                    else {
                      router.push('/')
                    }
                  }
                }} setOpen={mobileState.setOpen}  title="Ваша роль">
                <RadioGroup>
                    <div className="flex gap-[12px] flex-col" role="radiogroup" aria-label="Example radio group">
                        <RadioItem
                            id="baby"
                            name="Я няня, ищу работу"
                            value="Я няня, ищу работу"
                            checked={selectedValue === 'baby'}
                            onChange={() => setSelectedValue('baby')}
                        />
                        <RadioItem
                            id="parent"
                            name="Я родитель, ищу няню"
                            value="Я родитель, ищу няню"
                            checked={selectedValue === 'parent'}
                            onChange={() => setSelectedValue('parent')}
                        />
                        </div>
                </RadioGroup>
            </Popup>

            <Main__Hero />
            <Guarantees />
            <CardBabysitterList />
            <Changes />

            <div className="block_beige">
                <Solutions title="Не просто освобождаем вам время, а строим успешное будущее вашего ребенка" />   
                {/* <BeforePay items={[
                  title: 'Зарегистрируйтесь, заполнить информацию о себе',
                  icon: 
                ]} title="Что вас ждет после оплаты"/> */}
                <VideoBlock />
                <Reviews title={<>
                    Никто <br /> не расскажет  <br /> о нас лучше наших клиентов
                </>} />
                <Form_Home />
                <FAQ />
            </div>
            
            <Footer />
        </>
    )
}
