import React, { useState } from "react";
import Styles from "./Styles.jsx";
import Features from "./Features.jsx";
import style from "./MainOverview.module.css";
const Description = ({ product, prod, images }) => {
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState('')

  const handleSales = (item) => {
    // console.log(item);
    setPrice(item.original_price)
    setSalePrice(item.sale_price)
  };
 
  return (
    <div>
      <div className={style.category}>
        <h4>{prod && prod.category}</h4>
      </div>
      <div className={style.name}>
        <h1>{prod && prod.name}</h1>
      </div>
      <div className={salePrice ? style.changeSale : style.price}>{prod && price}</div>
      <div className={style.price}>{prod && salePrice}</div>

      <div>
        {prod && (
          <Styles product={product} images={images} handleSales={handleSales} />
        )}
      </div>
      <div>{prod && prod.slogan}</div>
      <div>{prod && prod.description}</div>
      <div>
        <Features prod={prod} />
      </div>
    </div>
  );
};

export default Description;
