import CartDetail from "../../components/CartDetail";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AnimatedPage from "../../components/AnimatedPage";


export default function Cart() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <CartDetail />
      </AnimatedPage>
      <Footer />
    </>
  )
}
