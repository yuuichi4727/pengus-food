import { useState } from 'react'
import styles from './FoodList.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FoodCard from '../FoodCard'
import { foodList } from '../../data'


export default function FoodList() {
    return (
        <Container>
            <div className={styles.listContainer}>
                <div className={styles.listInfo}>
                    <h1 className={styles.title}>Hungry? Let’s fix that</h1>
                    <p className={styles.desc}>Enjoy a favorite from the The Pengus's burger menu and pick from a large selection of classic burgers like the Big Mac, or pick a fresh beef burger like the Quarter Pounder with Cheese! </p>
                </div>
                <Row className={styles.wrapper}>
                    {foodList.map((items, index) => (
                        <FoodCard items={items} key={index} />
                    ))}
                </Row>
            </div>
        </Container>
    )
}
