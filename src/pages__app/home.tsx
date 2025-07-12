'use client'

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
import Reviews from "@/widgets/Reviews/Reviews"
import Solutions from "@/widgets/Solutions/Solutions"
import VideoBlock from "@/widgets/VideoBlock/VideoBlock"

export const HomePage = () => {
    const mobileState = useMobileState();

    return (
        <>
            <HeaderMenu />
            <MobileModal isOpen={mobileState.isOpen} setOpen={mobileState.setOpen} />
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
