import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Description from "./description/Description.jsx";
import style from "./MainOverview.module.css";
import SideBar from "./sidebar/SideBar.jsx";
import Gallery from "./gallery/Gallery.jsx";
import SelectedStyle from "./sidebar/SelectedStyle.jsx";
import Features from "./description/Features.jsx";
import Thumbnails from "./gallery/Thumbnails.jsx";

const MainOverview = ({ prod }) => {
  const [product, setProd] = useState([]);
  const { product_id } = useParams();
  const [images, setImages] = useState([]);
  const [currentThumb, setThumb] = useState("");
  const [selected, setSelected] = useState("");
  const [displays, setdisplays] = useState("");
  const [ids, setIds] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [thumbValue, setValue] = useState(false);
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const handleSales = (item) => {
    setPrice(item.original_price);
    setSalePrice(item.sale_price);
  };

  const handleThumbChange = (e) => {
    if (e) {
      setValue(false);
    }
  };

  const handleThumb = (e) => {
    setThumb(e.target.src);
    setValue(true);
  };

  const handleSelect = (e) => {
    setSelected(e.target.innerHTML);
  };

  const handleDisplays = (item) => {
    item.map((item) => setdisplays(item.url));
    // setdisplays(item);
  };

  const handleId = (item) => {
    setIds(item);
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
        setThumb(images[0]);
      })
      .catch((err) => console.log("err", err));
    setThumbnail(images.map((item) => item.map((img) => img.thumbnail_url)));
  }, []);

  return (
    <div className={style.gridcontainer}>
      <div className={style.gallery}>
        <div className={style.arrows}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </div>
        <div>
          {prod && (
            <Gallery
              product={product}
              images={images}
              selected={selected}
              displays={displays}
              handleSales={handleSales}
              id={ids}
              currentThumb={currentThumb}
              handleThumb={handleThumb}
              thumbValue={thumbValue}
            />
          )}
        </div>
        <div className={style.arrows}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </div>
      </div>
      <div className={style.sidebar}>
        <div>
          {prod && (
            <SideBar
              category={prod.category}
              name={prod.name}
              prices={product}
              price={price}
              salePrice={salePrice}
              prod={prod}
            />
          )}
        </div>
        <div>
          {prod && (
            <SelectedStyle
              handleThumbChange={handleThumbChange}
              product={product}
              handleSelect={handleSelect}
              handleDisplays={handleDisplays}
              handleId={handleId}
              handleSales={handleSales}
            />
          )}
        </div>
      </div>
      <div>
        <div className={style.line}></div>
        <div className={style.description}>
          <Description product={product} prod={prod} />
        </div>
      </div>
      <div className={style.description2}>
        <Features prod={prod} />
      </div>
    </div>
  );
};

export default MainOverview;
