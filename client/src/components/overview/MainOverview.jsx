import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Description from "./description/Description.jsx";
import style from "./MainOverview.module.css";
import SideBar from "./sidebar/SideBar.jsx";
import Gallery from "./gallery/Gallery.jsx";
import SelectedStyle from "./sidebar/SelectedStyle.jsx";

const MainOverview = ({ prod }) => {
  const [product, setProd] = useState([]);
  const { product_id } = useParams();
  const [images, setImages] = useState([]);

  const handleSales = (item) => {
    setPrice(item.original_price);
    setSalePrice(item.sale_price);
  };

  
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
    <div className={style.gridcontainer}>
      <div className={style.gallery}>
        <div>
          {prod && (
            <Gallery
              product={product}
              images={images}
              handleSales={handleSales}
            />
          )}
        </div>
      </div>
      <div className={style.sidebar}>
        <div>
          {prod && (
            <SideBar category={prod.category} name={prod.name} prices={prod} />
          )}
        </div>
        <div>
          {prod && (
            <SelectedStyle product={product}  />
          )}
        </div>
      </div>
      <Description product={product} prod={prod} images={images} />
    </div>
  );
};

export default MainOverview;
