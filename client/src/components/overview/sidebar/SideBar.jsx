import React, { useState, useRef } from "react";
import style from "../MainOverview.module.css";
import Star from '../../reviews/Stars.jsx'
const SideBar = ({ prices, name, category, price, salePrice, prod }) => {
  const scrollDiv = useRef(null)


  if (price) {
    price = "$" + price;
  }

  if (salePrice) {
    salePrice = "$" + salePrice;
  }
  const handleBottom = () => {
    if (scrollDiv.current) {
      scrollDiv.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div>
      <div className={style.reviews} onClick={() => handleBottom()}>Read all reviews</div>
      <div> <Star/></div>
      <div>{category}</div>
      <div className={style.name}>{name}</div>
    <div><br></br></div>
      <div className={style.defaultPrice}>
        {prices && !price && `$${prod.default_price}`}
      </div>
      <div className={salePrice ? style.changeSale : style.price}>
        {prices && price}
      </div>
      <div className={style.price}>{prices && salePrice}</div>
      <div style={{
        position: 'absolute',
        bottom: 0,
       
        content: '""',
      }} ref={scrollDiv}></div>
    </div>
  );
};

export default SideBar;
