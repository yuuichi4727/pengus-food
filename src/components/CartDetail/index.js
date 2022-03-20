import { useEffect } from 'react'
import styles from './CartDetail.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { decreaseAmount, increaseAmount, removeProduct, getTotals, checkOut } from '../../redux/cartSlice'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


export default function CartDetail() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart])

    const handleDecrease = (product) => {
        dispatch(decreaseAmount(product))
    }

    const handleIncrease = (product) => {
        dispatch(increaseAmount(product))
    }

    const handleRemove = (product) => {
        dispatch(removeProduct(product))
    }

    const handleCheckout = () => {
        dispatch(checkOut())
        toast('Checkout Success', {
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
        <Container>
            <div className={styles.cartContainer}>
                <h1 className={styles.title}>Your Cart</h1>
                <Row>
                    <Col lg={8}>
                        {cart.products.map((product, index) => (
                            <div className={styles.cartItem} key={index}>
                                <Row>
                                    <Col lg={8} className={styles.container}>
                                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                                            <div className={styles.info}>
                                                <div className={styles.img}>
                                                    <img src={product.img} />

                                                </div>
                                                <div className={styles.productTitle}>
                                                    <span><b>Product:</b> {product.title}</span>
                                                </div>
                                            </div>
                                        </Link>

                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.details}>
                                            <span style={{ color: '#ff7a76', cursor: 'pointer', marginBottom: 32, fontWeight: 800 }} onClick={() => handleRemove(product)}>Remove</span>
                                            <div className={styles.amountContainer}>

                                                <div className={styles.amountDecrease} onClick={() => handleDecrease(product)}>
                                                    <AiOutlineMinus />
                                                </div>
                                                <div className={styles.amountInput}>
                                                    {product.amount}
                                                </div>
                                                <div className={styles.amountIncrease} onClick={() => handleIncrease(product)}>
                                                    <AiOutlinePlus />
                                                </div>
                                            </div>
                                            <div className={styles.price}>
                                                <span><b>Total:</b> {parseFloat(product.price * product.amount).toFixed(2)} $</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                            </div>
                        ))}

                    </Col>
                    <Col lg={4}>
                        <div className={styles.totalContainer}>
                            <h3>Order Summary</h3>
                            <div className={styles.totalItem}>
                                <span className={styles.itemText}>SubTotal: </span>
                                <span className={styles.itemPrice}>{cart.totalPrice} $ </span>
                            </div>
                            <div className={styles.totalItem}>
                                <span className={styles.itemText}>Shipping: </span>
                                <span className={styles.itemPrice}>38$ </span>
                            </div>
                            <div className={styles.totalItem}>
                                <span className={styles.itemText}>Shipping discount: </span>
                                <span className={styles.itemPrice}> - 38$ </span>
                            </div>
                            <div className={styles.totalItemTotal}>
                                <span className={styles.itemTextTotal}>Total: </span>
                                <span className={styles.itemPriceTotal}>{cart.totalPrice}$ </span>
                            </div>
                            <button className={styles.button} onClick={handleCheckout}>Checkout now</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
