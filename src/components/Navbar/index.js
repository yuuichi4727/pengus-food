import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { BsCart4, BsTelephone } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';



export default function Navbar() {

    const cart = useSelector(state => state.cart)


    return (
        <div className={styles.Container}>
            <Container>
                <div className={styles.navbarContainer}>
                    <div className={styles.item}>
                        <div className={styles.callButton}>
                            <BsTelephone />
                        </div>
                        <div className={styles.texts}>
                            <div className={styles.text}>ORDER NOW!</div>
                            <div className={styles.text}>38 38 38 38</div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <ul className={styles.list}>
                            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className={styles.listItem}>Homepage</li>
                            </Link>
                            <li className={styles.listItem}>Products</li>
                            <li className={styles.listItem}>Menu</li>
                            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                                <img src="https://stickershop.line-scdn.net/stickershop/v1/product/1386718/LINEStorePC/main.png;compress=true" />
                            </Link>
                            <li className={styles.listItem}>Event</li>
                            <li className={styles.listItem}>Blog</li>
                            <li className={styles.listItem}>Contact</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <Link to="/cart">
                            <div className={styles.cartContainer}>
                                <div className={styles.cart}>
                                    <BsCart4 />
                                </div>
                                <div className={styles.counter}>{cart.totalQuantity}</div>
                            </div>

                        </Link>
                    </div>
                </div>
            </Container>

        </div>
    )
}
