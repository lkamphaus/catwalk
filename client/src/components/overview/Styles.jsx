import React, { useContext, useEffect, useState } from "react";
import style from "./MainOverview.module.css";

const Styles = ({ product, images, handleSales }) => {
  const [selected, setSelected] = useState("");

  const [displayed, setDisplayed] = useState([]);
  const [ids, setIds] = useState([]);
  // console.log(product);
  // create a function to handle currently selected style
  // changes the text of which style is selected
  //adds a checkmark to which one is selected
  // changes to selected style to shown on main image
  //updates price to selected style price
  // console.log(product);
  const handleSelected = (e) => {
    setSelected(e.target.innerHTML);

    product.map((item) => {
      if (item.name === e.target.innerHTML) {
        setIds((ids) => [item.style_id]);
        if (!ids.includes(item.style_id)) {
          setDisplayed((displayed) => item.photos);
        }

        handleSales(item);
      }
    });
  };

  // put each child inside of a circle type image.

  // console.log(images);
  return (
    <div>
      <div className={style.image}>
        {displayed.length <= 0 ? (
          <img
            style={{ height: "500px", width: "500px" }}
            src={images.map((item) => item.map((img) => img.url))}
          ></img>
        ) : (
          <img
            style={{ height: "500px", width: "500px" }}
            src={displayed.map((item) => item.url)}
          ></img>
        )}
        {displayed.length <= 0 ? (
          <img
            style={{ height: "150px", width: "150px" }}
            src={images.map((item) => item.map((img) => img.thumbnail_url))}
          ></img>
        ) : (
          <img
            style={{ height: "150px", width: "150px" }}
            src={displayed.map((item) => item.thumbnail_url)}
          ></img>
        )}
      </div>
      <h1 className={style.style}>Styles: {selected}</h1>
      <div >
        {product &&
          product.map((item) => (
            <div className={style.selected}
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

export default Styles;
