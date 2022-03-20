import FoodList from "../../components/FoodList";
import FoodRecommend from "../../components/FoodRecommend";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductDetail from "../../components/ProductDetail";


export default function Product() {
    return (
        <>
            <Navbar/>
            <ProductDetail />
            <FoodRecommend />
            <Footer />
        </>
    )
}
