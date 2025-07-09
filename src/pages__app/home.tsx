import BeforePay from "@/widgets/BeforePay/BeforePay"
import CardBabysitter from "@/widgets/CardBabysitter/CardBabysitter"
import CardBabysitterList from "@/widgets/CardBabysitterList/CardBabysitterList"
import Main__Hero from "@/widgets/main__hero/main__hero"
import Solutions from "@/widgets/Solutions/Solutions"

export const HomePage = () => {
    return (
        <>
            <Main__Hero />

            <CardBabysitterList />

            <div className="block_beige">
                <Solutions />   
                <BeforePay />
            </div>
        </>
    )
}
