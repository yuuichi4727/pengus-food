import styles from './FoodRecommend.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FoodRecommend() {
    AOS.init({
        duration: 600
    });

    return (
        <Container>
            <div className={styles.recContainer}>
                <h1 className={styles.title}>You might also like</h1>
                <Row data-aos="fade-up"> 
                    <Col lg={4}>
                        <div className={styles.info}>
                            <img src="https://mcdonalds.com.au/sites/mcdonalds.com.au/files/YMAL_BURGER_BigMac.png" />
                            <p>Big Mac</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.info}>
                            <img src="https://mcdonalds.com.au/sites/mcdonalds.com.au/files/YMAL_BURGER_BigMac.png" />
                            <p>Big Mac</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.info}>
                            <img src="https://mcdonalds.com.au/sites/mcdonalds.com.au/files/YMAL_BURGER_BigMac.png" />
                            <p>Big Mac</p>
                        </div>
                    </Col>

                </Row>
            </div>
        </Container>
    )
}
