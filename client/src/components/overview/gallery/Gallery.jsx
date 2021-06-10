import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Thumbnails from "./Thumbnails.jsx";

const Gallery = ({
  images,
  displays,
  handleThumb,
  currentThumb,
  thumbValue,
}) => {
  // console.log(product);
  const [thumbnail, setThumbnail] = useState("");
  // const [thumbValue, setValue] = useState(false);

  useEffect(() => {
    setThumbnail(images.map((item) => item.map((img) => img.thumbnail_url)));
  }, []);

  // const handleThumb = (e) => {
  //   setcurrentThumb(e.target.src);
  //   setValue(true);
  // };

  return (
    <div>
      <div>
        {currentThumb && thumbValue === true ? (
          <img className={style.image} src={currentThumb}></img>
        ) : displays.length <= 0 ? (
          <img
            className={style.image}
            src={images.map((item) => item.map((img) => img.url))}
          ></img>
        ) : (
          <img
            className={style.image}
            src={displays.map((item) => item.url)}
          ></img>
        )}
        <div className={style.thumbs}>
          {images &&
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
      </div>
    </div>
  );
};

export default Gallery;
