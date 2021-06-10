import React from "react";
import style from "../MainOverview.module.css";

const Checkout = () => {
  return (
    <div>
      <br></br>
      <div>
        <button className={style.buttons}>Select Size</button>
        <button className={style.cart}>1</button>
      </div>
      <br></br>
      <div>
        <button className={style.buttons}>Add to Bag</button>
        <button className={style.cart}>*</button>
      </div>
    </div>
  );
};

export default Checkout;
