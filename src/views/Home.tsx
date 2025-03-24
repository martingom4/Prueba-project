import HeroSection from "../components/Hero";
import ProductsList from "../components/Ui/UiProducts";



export default function Home() {
    return (
        <div className='bg-gradient-to-b from-primary-red to-primary-yellow min-h-screen'>
            <div>
                <HeroSection/>
            </div>
            <div>
                <ProductsList/>
            </div>
        </div>
    )
}
