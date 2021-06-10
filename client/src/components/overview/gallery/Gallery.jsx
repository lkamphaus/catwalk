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
  const [expandedOpen, setExpandedOpen] = useState(false);

  useEffect(() => {
    setThumbnail(images.map((item) => item.map((img) => img.thumbnail_url)));
  }, []);


  return (
    <div>
      
      <div>
        {currentThumb && thumbValue === true ? (
          <img 
          onClick={() => setExpandedOpen(true)} className={style.image} src={currentThumb}></img>
        ) : displays.length <= 0 ? (
          <img
          onClick={() => setExpandedOpen(true)} 
            className={style.image}
            src={images.map((item) => item.map((img) => img.url))}
          ></img>
        ) : (
          <img
          onClick={() => setExpandedOpen(true)} 
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
      {expandedOpen && (
        <div onClick={() => setExpandedOpen(false)} style={{
          position: 'fixed',
          height: 'calc(100vh - 200px)',
          width: 'calc(100vw - 200px',
          background: 'white',
          padding: 50,
          top: '50px',
          left: '50px',
        }}>
          <div style={{
            height: '100%',
            width: '100%',
            background: `url('${currentThumb}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
