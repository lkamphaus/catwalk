import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Checkout from "./Checkout.jsx";

const SelectedStyle = ({
  product,
  handleSelect,
  handleDisplays,
  handleId,
  handleSales,
  handleThumbChange,
}) => {
  const [selected, setSelected] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [ids, setIds] = useState([]);

  let array = product.map((item) => item.name);

  const handleSelected = (e, item) => {
    
    handleId(item.style_id);
    setIds((ids) => [item.style_id]);
    if (!ids.includes(item.style_id)) {
      handleDisplays(item.photos);
      setDisplayed((displayed) => item.photos);
    }

    handleSales(item);
    handleThumbChange(e);
    setSelected(item.name);
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
              style={{ backgroundColor: selected !== item.name ? "#b8b6b6" : "#D96C06" }}
              key={item.style_id}
              onClick={(e) => {
                handleSelected(e, item);
              }}
            >{selected === item.name && 
            <div className={style.checkMark}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg></div>
            }
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
