import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TopSlider from "../../components/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AnimatedPage from "../../components/AnimatedPage";



export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, [])
    return (
        <>
            <Navbar />
            <AnimatedPage>
                <TopSlider />
                <FoodList data-aos="slide-left" />
                <Footer />
            </AnimatedPage>
        </>
    )
}
