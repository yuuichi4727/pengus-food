import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './FoodCard.module.scss'
import { Link } from "react-router-dom";
import { addProduct } from '../../redux/cartSlice'
import { useDispatch } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';



export default function FoodCard({ items }) {
    const dispatch = useDispatch()
    AOS.init({
        duration: 2000
    });

    const handleIncrease = (items) => {
        dispatch(addProduct({ ...items, amount: 1 }))
        toast('Added to Cart!', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <Col md={6} lg={3} data-aos="fade-up">
            <div className={styles.CardContainer}>
                <Link to={`/product/${items.id}`} style={{ textDecoration: 'none' }}>
                    <div className={styles.img}>
                        <img src={items.img} />
                    </div>
                    <div className={styles.CardInfo}>
                        <h1 className={styles.title}>{items.title}</h1>
                        <span className={styles.price}>{items.price} $</span>
                    </div>
                </Link>
                <div className={styles.btnContainer}>
                    <button className={styles.button} onClick={() => handleIncrease(items)} >Order Now</button>
                </div>
            </div>
        </Col>
    )
}
