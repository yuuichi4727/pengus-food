import { useEffect, useState } from 'react'
import styles from './ProductDetail.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { foodList } from '../../data'
import { useLocation } from 'react-router-dom'
import { addProduct } from "../../redux/cartSlice"
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';



export default function ProductDetail() {
    const dispatch = useDispatch()
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [amount, setAmount] = useState(1)
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        setProductDetail(foodList.find((item) => item.id == id))
    }, [id])


    const handleDecrease = () => {
        setAmount(prev => {
            if (prev != 1) {
                return prev - 1
            } else {
                return 1
            }
        })
    }

    const handleAdd = () => {
        dispatch(
            addProduct({ ...productDetail, amount })
        )
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

    console.log(amount)

    return (
        <Container>
            <div className={styles.productDetailContainer}>
                <Row>
                    <Col lg={6}>
                        <div className={styles.productImg}>
                            <img src={productDetail.img} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.info}>
                            <h1 className={styles.title}>{productDetail.title}</h1>
                            <span className={styles.price}>{productDetail.price} $</span>
                            <p className={styles.desc}>{productDetail.desc}</p>
                        </div>
                        <div className={styles.orderSection}>
                            <div className={styles.amountContainer}>
                                <div className={styles.amountDecrease}>
                                    <AiOutlineMinus onClick={handleDecrease} />
                                </div>
                                <div className={styles.amountInput}>
                                    <div>{amount}</div>
                                </div>
                                <div className={styles.amountIncrease}>
                                    <AiOutlinePlus onClick={() => setAmount(amount + 1)} />
                                </div>
                            </div>
                            <div className={styles.add}>
                                <button className={styles.addBtn} onClick={handleAdd}>Order Now</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
