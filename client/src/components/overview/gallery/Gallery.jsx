import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Thumbnails from "./Thumbnails.jsx";

const Gallery = ({ images, displays }) => {
  // console.log(product);
  const [thumbnail, setThumbnail] = useState("");
  const [currentThumb, setcurrentThumb] = useState("");

  

  useEffect(() => {
    setThumbnail(images.map((item) => item.map((img) => img.thumbnail_url)));
  }, []);

  const handleThumb = (e) => {
    setcurrentThumb(e.target.src);

  };
 

  return (
    <div>
      <div >
        {displays.length <= 0 ? (
          <img
            className={style.image}
            src={images.map((item) => item.map((img) => img.url))}
          ></img>
        ) : (
          currentThumb ? <img className={style.image} src={currentThumb}></img>
            :
            <img
              className={style.image}
              src={displays.map((item) => item.url)}
            ></img>
          
        )}
        {images ? (
          <div className={style.thumbs}>
            { images && 
            images.map((item) =>
              item.map((img) => (
                <Thumbnails
                  handleThumb={handleThumb}
                  thumbUrl={img.thumbnail_url}
                  key={item}
                />
              ))
            )}
          </div>
        ) : (
          <div className={style.thumbs}>
            { thumbnail &&
              thumbnail.map((item) => (
                <Thumbnails
                  thumbnail={item}
                  key={item}
                  handleThumb={handleThumb}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
