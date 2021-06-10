import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Checkout from "./Checkout.jsx";

const SelectedStyle = ({
  product,
  handleSelect,
  handleDisplays,
  handleId,
  handleSales,
}) => {
  const [selected, setSelected] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [ids, setIds] = useState([]);

  let array = product.map((item) => item.name);

  const handleSelected = (e) => {
    product.map((item) => {
      if (item.name === e.target.innerHTML) {
        handleId(item.style_id);
        setIds((ids) => [item.style_id]);
        if (!ids.includes(item.style_id)) {
          handleDisplays(item.photos);
          setDisplayed((displayed) => item.photos);
        }

        handleSales(item);
      }
    });
    setSelected(e.target.innerHTML);
    handleSelect(e);
  };

  return (
    <div>
      <h1 className={style.style}>Styles: {!selected ? array[0] : selected}</h1>
      
      <div className={style.styleDiv}>
        {product &&
          product.map((item) => (
            <div
              className={style.selected}
              key={item.style_id}
              onClick={(e) => {
                handleSelected(e);
              }}
            >
              {item.name}
            </div>
          ))}
      </div>
      <div>
        <Checkout />
      </div>
    </div>
  );
};

export default SelectedStyle;
