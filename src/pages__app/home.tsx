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
import RadioItem from "@/widgets/RadioItem/RadioItem"
import Reviews from "@/widgets/Reviews/Reviews"
import SelectModal from "@/widgets/SelectModal/SelectModal"
import Solutions from "@/widgets/Solutions/Solutions"
import VideoBlock from "@/widgets/VideoBlock/VideoBlock"

export const HomePage = () => {
    const mobileState = useMobileState();

    return (
        <>
            <HeaderMenu />

            <MobileModal title={'Выбор роли'} isOpen={mobileState.isOpen && mobileState.type === ''} next={() => mobileState.setOpen(true, 'city')} setOpen={mobileState.setOpen}>
                <RadioGroup className="mt-[16px] flex gap-[12px] flex-col">
                    <RadioItem name="Я няня, ищу работу" id="babysitter "value='babysitter' />
                    <RadioItem name="Я родитель, ищу няню" id="parent "value='parent' />
                </RadioGroup>
            </MobileModal>

            <MobileModal title={'Выбор роли'} isOpen={mobileState.isOpen && mobileState.type === 'city'} next={() => mobileState.setOpen(false, '')} setOpen={mobileState.setOpen}>
                <SelectModal title='Москва и МО' items={[
                  {
                    name: 'Москва и МО',
                    id: 'city1',
                  },
                  {
                    name: 'Москва и МО',
                    id: 'city2',
                  }
                ]}          
                />
            </MobileModal>

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
