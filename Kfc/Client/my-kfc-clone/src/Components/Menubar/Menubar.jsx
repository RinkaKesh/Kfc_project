import React from 'react';
import style from "./Menubar.module.css"

const Menubar = () => {
    return (
        <div >
            <div className={style.menubar}>
                LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
                <button>Start Order</button>
            </div>
        </div>
    )
}

export default Menubar