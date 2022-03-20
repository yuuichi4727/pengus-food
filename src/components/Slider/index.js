import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from './Slider.module.scss';


export default function TopSlider() {
    const sliderImages = [
        "https://www.mcdonalds.co.jp/media_library/13846/file.original.jpg?1644993888422?20220317235915",
        "//www.mcdonalds.co.jp/media_library/13777/file.original.jpg?1644296431129?20220315235915",
        "//www.mcdonalds.co.jp/media_library/14082/file.original.jpg?1646726789856?20220314045919",
        "//www.mcdonalds.co.jp/media_library/13999/file.original.jpg?20220316105915"
    ];
    var settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableHeight: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
    };



    return (
        <div className={styles.sliderContainer} >
            <Slider {...settings}>
                {sliderImages.map((sliderImage, index) => (
                    <div className={styles.imgContainer} key={index}>
                        <img src={sliderImage} />
                    </div>
                ))}
            </Slider>
        </div >
    )
}
