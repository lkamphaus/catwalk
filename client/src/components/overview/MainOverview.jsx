import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Description from './Description.jsx'
import style from './MainOverview.module.css'

const MainOverview = ({prod}) => {
  const [product, setProd] = useState([]);
  const { product_id } = useParams();
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetch(
      `http://localhost:3246/api/products/${product_id}/styles?format=json`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProd((product) => data.results);
        setImages((images) =>
          data.results.map((item) => item.photos.map((img) => img))
        );
      })
      .catch((err) => console.log("err", err));
  }, []);



  return (
    <div>
      <div className="prod" style={{ color: "black" }}>
        
        <div className={style.gridcontainer}>
          <Description product={product} prod={prod} images={images}/>
        </div>
      </div>
    </div>
  );
};

export default MainOverview;
