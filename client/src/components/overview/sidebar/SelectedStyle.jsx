import React, { useState } from "react";
import style from "../MainOverview.module.css";

const SelectedStyle = ({ handleSelected, product }) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h1 className={style.style}>Styles: {selected}</h1>
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
    </div>
  );
};

export default SelectedStyle;
