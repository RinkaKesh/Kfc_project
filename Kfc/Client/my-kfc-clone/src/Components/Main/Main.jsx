
import React from 'react';
import style from './Main.module.css';
import { CgArrowLongRight } from "react-icons/cg"

const Main = () => {
    const categoryList=[
        {
            id:1,src:"peri peri.jpg",title:"PERI PERI CHICKEN"
        },{ id:2,src:"valueSnack.jpg",title:"VALUE SNACKERS"},{ id:3,src:"Chicken roll.jpg",title:"CHICKEN ROLLS"},{ id:4,src:"Chicken bucket.jpg",title:"CHICKEN BUCKETS"},{ id:5,src:"Biriyani.jpg",title:"BIRIYANI BUCKETS"},{ id:6,src:"BoxMeal.jpg",title:"BOX MEALS"},
        { id:7,src:"Burger.jpg",title:"BURGERS"}
    ]
  return (
    <div className={style.category}>
        <h1>BROWSE CATEGORIES</h1>
        <div className={style.categoryWrapper}>
           {categoryList.map((category)=>(
            <div key={category.id} className={style.categoryCard}>
            <img src={category.src} alt={category.alt}  />
            <h6>{category.title}</h6>
            </div>
           ))}
           <div className={style.categoryCard} id={style.finger_licking}>
            <img src="finger_lickin.fc21c805.svg" alt="finger_lickin" />
            <p>View All Menu <CgArrowLongRight/></p>
           </div>
        </div>
    </div>
  )
}

export default Main