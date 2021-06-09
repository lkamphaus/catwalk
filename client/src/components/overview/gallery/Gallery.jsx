import React, {useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Thumbnails from "./Thumbnails.jsx";

const Gallery = ({ product, images, handleSales }) => {
  const [selected, setSelected] = useState("");

  const [displayed, setDisplayed] = useState([]);
  const [ids, setIds] = useState([]);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    setThumbnail(images.map((item) => item.map((img) => img.thumbnail_url)));
  }, []);

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

  return (
    <div>
      <div className={style.image}>
        {displayed.length <= 0 ? (
          <img
            style={{ height: "650px", width: "650px"}}
            src={images.map((item) => item.map((img) => img.url))}
          ></img>
        ) : (
          <img
            style={{ height: "650px", width: "650px" }}
            src={displayed.map((item) => item.url)}
          ></img>
        )}
        {displayed.length <= 0 ? (
          <div>
            {images.map((item) =>
              item.map((img) => (
                <Thumbnails thumbUrl={img.thumbnail_url} key={item} />
              ))
            )}
          </div>
        ) : (
          <div>
            {thumbnail.map((item) => (
              <Thumbnails thumbnail={item} key={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
