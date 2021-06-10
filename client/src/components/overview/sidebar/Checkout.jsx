import React from "react";
import style from "../MainOverview.module.css";

const Checkout = () => {
  return (
    <div>
      <br></br>
      <div>
        <button className={style.buttons}>Select Size</button>
        <button className={style.buttoner}>1</button>
      </div>
      <br></br>
      <div>
        <button className={style.cart}>Add to Bag</button>
      </div>
    </div>
  );
};

export default Checkout;
