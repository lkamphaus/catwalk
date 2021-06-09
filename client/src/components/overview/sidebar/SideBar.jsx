import React, { useState } from "react";
import style from "../MainOverview.module.css";


const SideBar = ({ prices, name, category }) => {
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  //  <div className={style.category}>
  // <h4>{prod && prod.category}</h4>
  // </div>

  return (
    <div>
      <div style={{fontSize: '20px'}}>{category}</div>
      <div className={style.name}>{name}</div>
      <div className={style.defaultPrice}>
        ${prices && !price && prices.default_price}
      </div>
      <div className={salePrice ? style.changeSale : style.price}>
        {prices && price}
      </div>
      <div className={style.price}>{prices && salePrice}</div>
    </div>
  );
};

export default SideBar;
