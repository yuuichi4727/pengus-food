import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ScrollToTop from './scrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <BrowserRouter>
        <ToastContainer />
        <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
