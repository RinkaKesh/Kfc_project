import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import style from './Slider.module.css'

const Slider = () => {
   

    return (

        <Carousel interval={4000} controls={false} className={style.slider} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="Zinger.webp"
                    alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="Chizza.webp"
                    alt="Second slide"
                />
                
            </Carousel.Item>
        </Carousel>
    );
};


export default Slider;
