import React from 'react';
import style from "./Header.module.css"
import { FaUserTie } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className={style.TopHeader}>
                <p><FaLocationDot className={style.locationIcon} />Allow location access for local store menu and promos</p>
                <button>Set Location</button>

            </div>
            <div className={style.navbar}>
                <div className={style.left}>
                    <ul>
                        <li><img src="kfcLogo.svg" alt="" /></li>
                        <li><button>Menu</button></li>
                        <li><button>Deals</button></li>
                    </ul>
                </div>

                <div className={style.right}>
                    <ul>
                        <li><Link to="/signin"><FaUserTie className={style.userIcon} /><strong className={style.user}>Sign In</strong></Link></li>
                        <li><img src="Cart_icon_animation_120-_icon.svg" alt="cart-icon" className={style.cartLogo} /></li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Navbar