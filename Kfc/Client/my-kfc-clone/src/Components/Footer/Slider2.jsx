import React, { useState } from 'react';
// import data from '.Public/Data.js'
import style from './Slider2.module.css';
import Card from './Card';

// const Slider2 = () => {
    const data = [

        {
            title: "FREE CHICKEN...",
            desc: "1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for...",
            img: "freeChkn.jpg",
            id: 1

        }, {
            title: "ADD 2 PC HOT N..." ,
            desc: "ADD 2 PC HOT N CRISPY CHICKEN AT JUST RS 99 ON MIN CART VALUE OF RS 499 OR MORE...",
            img: "Hot&Crispy.jpg",
            id: 2

        }, {
            title: "UPTO RS 100 O...",
            desc: "Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onward...",
            img: "100Rs.jpg",
            id: 3

        }, {
            title: "GET FLAT RS.75 OFF...",
            desc: "Get flat Rs.75 off on a cart value of 599 or above",
            img: "PHP75.jpg",
            id: 4

        }, {
            title: "FREE POPCORN...",
            desc: "Free Popcorn (Med) on a cart value of 499 or more. Friday only.",
            img: "popcorn.jpg",
            id: 5

        }, {
            title: "FREE 1PC CHICKEN...",
            desc: "Free 1pc Chicken on a cart value of 499 or more. Friday only.",
            img: "free1pc.jpg",
            id: 6

        }, {
            title: "FREE 3PC STRIPS O...",
            desc: "Free 3pc Strips on a cart value of 499 or more. Friday only.",
            img: "free3pc.jpg",
            id: 7

        }, {
            title: "FREE VEG ZINGER O...",
            desc: "Free Veg Zinger on a cart value of 499 or more. Friday only.",
            img: "freeveg.jpg",
            id: 8

        }, {
            title: "FREE FRIES (MED)...",
            desc: "Free Fries (Med) on a cart value of 499 or more. Friday only.",
            img: "freeFries.jpg",
            id: 9

        }]
        const Slider2 = ({ data }) => {
            const [cards, setCards] = useState(data.slice(0, 3)); // Show first 3 cards initially
          
            const handleClick = () => {
              const nextId = cards[cards.length - 1].id + 1;
              const newCardIndex = nextId - 1;
              const newCard = data[newCardIndex];
              const shiftedCards = [...cards.slice(1), newCard];
              setCards(shiftedCards);
            };

            return (
                <div className="slider-container">
                  <div className="slider">
                    {cards.map((cardData) => (
                      <Card key={cardData.id} title={cardData.title} desc={cardData.desc} img={cardData.img} />
                    ))}
                  </div>
                  <button onClick={handleClick}>Click me</button>
                </div>
              );
            };
            
            export default Slider2;