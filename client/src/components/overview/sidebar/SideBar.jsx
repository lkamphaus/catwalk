import React, { useState } from "react";
import style from "../MainOverview.module.css";

const SideBar = ({ prices, name, category, price, salePrice, prod }) => {
  if (price) {
    price = "$" + price;
  }

  if (salePrice) {
    salePrice = "$" + salePrice;
  }

  return (
    <div>
      <div className={style.reviews}>Real all reviews</div>
      <div>{category}</div>
      <div className={style.name}>{name}</div>

      <div className={style.defaultPrice}>
        {prices && !price && `$${prod.default_price}`}
      </div>
      <div className={salePrice ? style.changeSale : style.price}>
        {prices && price}
      </div>
      <div className={style.price}>{prices && salePrice}</div>
      
    </div>
  );
};

export default SideBar;
