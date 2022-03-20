import styles from './Footer.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={styles.container}>
            <Container styles={{ marginTop: 36 }}>
                <Row className={styles.footerContainer}>
                    <Col md={6} lg={7}>
                        <h1 className={styles.logo}>The Pengus.</h1>
                        <div className={styles.SocialContainer}>
                            <FaFacebookSquare className={styles.socialIcons} />
                            <FaInstagram className={styles.socialIcons} />
                            <FaTwitter className={styles.socialIcons} />
                            <FaYoutube className={styles.socialIcons} />
                        </div>
                    </Col>
                    <Col md={6} lg={5}>
                        <div className={styles.info}>
                            <div className={styles.top}>
                                <h2>Order.Earn.Enjoy</h2>
                                <img src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10444988/android/sticker.png" />
                            </div>
                            <div className={styles.download}>
                                <span>Download our app</span>
                                <div className={styles.google}>
                                    <img src="https://mcdonalds.com.au/sites/all/themes/mcdonalds/images/store--apple.png" />
                                </div>
                                <div className={styles.facebook}>
                                    <img src="https://mcdonalds.com.au/sites/all/themes/mcdonalds/images/store--google.png" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.footerMenu}>
                    <Col xs={6} md={3} lg={3}>
                        <ul className={styles.menuList}>
                            <li className={styles.item}>
                                <h4>About Us</h4>
                            </li>
                            <li className={styles.item}>
                                Team
                            </li>
                            <li className={styles.item}>
                                History
                            </li>
                            <li className={styles.item}>
                                FAQs
                            </li>
                            <li className={styles.item}>
                                Contact Us
                            </li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <ul className={styles.menuList}>
                            <li className={styles.item}>
                                <h4>Newsroom</h4>
                            </li>
                            <li className={styles.item}>
                                Newsroom.
                            </li>
                            <li className={styles.item}>
                                Media
                            </li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <ul className={styles.menuList}>
                            <li className={styles.item}>
                                <h4>Careers</h4>
                            </li>
                            <li className={styles.item}>
                                Restaurant Careers
                            </li>
                            <li className={styles.item}>
                                Corporate Careers
                            </li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <ul className={styles.menuList}>
                            <li className={styles.item}>
                                <h4>Help</h4>
                            </li>
                            <li className={styles.item}>
                                Help Center
                            </li>
                            <li className={styles.item}>
                                Payment
                            </li>
                            <li className={styles.item}>
                                Shipping
                            </li>
                            <li className={styles.item}>
                                Feedback
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
