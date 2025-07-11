import BeforePay from "@/widgets/BeforePay/BeforePay"
import CardBabysitterList from "@/widgets/CardBabysitterList/CardBabysitterList"
import FAQ from "@/widgets/Faq/Faq"
import Footer from "@/widgets/Footer/Footer"
import Form_Home from "@/widgets/Form_Home/Form_Home"
import Guarantees from "@/widgets/Guarantees/Guarantees"
import Main__Hero from "@/widgets/main__hero/main__hero"
import Reviews from "@/widgets/Reviews/Reviews"
import Solutions from "@/widgets/Solutions/Solutions"
import VideoBlock from "@/widgets/VideoBlock/VideoBlock"

export const HomePage = () => {
    return (
        <>
            <Main__Hero />

                <Guarantees />
            <CardBabysitterList />

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
