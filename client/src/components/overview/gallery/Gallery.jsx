import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Thumbnails from "./Thumbnails.jsx";

const Gallery = ({ product, images, handleSales, selected, ids, displays }) => {
  // console.log(product);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    setThumbnail(images.map((item) => item.map((img) => img.thumbnail_url)));
  }, []);

  return (
    <div>
      <div className={style.image}>
        {displays.length <= 0 ? (
          <img
            style={{ height: "650px", width: "650px" }}
            src={images.map((item) => item.map((img) => img.url))}
          ></img>
        ) : (
          <img
            style={{ height: "650px", width: "650px" }}
            src={displays.map((item) => item.url)}
          ></img>
        )}
        {displays.length <= 0 ? (
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
