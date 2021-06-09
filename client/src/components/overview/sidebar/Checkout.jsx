import React from 'react'
import style from "../MainOverview.module.css";


const Checkout = () => {



    return (
        <div>
            <br></br>
            <button className={style.buttons}>Select Size</button>
            <button className={style.buttons}>1</button>
            <br></br>
            <div>
            <button className={style.buttons}>Add to Bag</button>
            <button className={style.buttons}>*</button>
            </div>
        </div>
    )
}

export default Checkout