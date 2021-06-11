
import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Thumbnails from "./Thumbnails.jsx";
import Modal from "/Users/jacobmelnick/web/starfire-project-catwalk/client/src/components/reviews/Modal.jsx";
const Gallery = ({
  images,
  displays,
  handleThumb,
  currentThumb,
  thumbValue,
  firstImg,
}) => {
  const [zoom, setZoom] = useState(0);
  
  const [expandedOpen, setExpandedOpen] = useState(false);
  
  const handleReset = () => {
    setExpandedOpen(false)
    
  }
  
  const handleOpen = () => {
      setZoom(zoom + 1)
    
  }

  console.log(zoom);

  return (
    <div>
      <div>
        {currentThumb && thumbValue === true ? (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={currentThumb}
          ></img>
        ) : !displays ? (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={images.map((item) => item.map((img) => img.url))}
          ></img>
        ) : (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={displays}
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
      <Modal>
        {expandedOpen && (
          <div
            className={style.modal}
            style={{
              position: "fixed",
              height: "calc(100vh - 700px)",
              width: "calc(100vw - 600px)",
              backgroundColor: "#F5EFED",
              padding: 50,
              top: "10px",
            }}
          >
               <div className={style.modalThumbs}>
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
              
            <div
              onClick={() => handleOpen()}
              className={zoom % 2 === 1 ? style.expanded : null}
              style={{
                height: "100%",
                width: "50%",
                background:
                  !displays && !currentThumb && firstImg
                    ? `url('${firstImg[0].join()}') no-repeat `
                    : currentThumb && thumbValue === true
                    ? `url('${currentThumb}') no-repeat `
                    : `url('${displays}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                transition: "transform .8s ease",
                cursor: zoom % 2 === 1 ? "zoom-out" : "crosshair",
              }}
            >
              
            </div>
           
            <div
                onClick={() => {
                  handleReset()
                }}
                style={{
                  marginBottom: "780px",
                  // marginLeft: "1130px",
                  cursor: "pointer",
                  float: 'right'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm8.8-5v14h-20v-3h-4v-15h21v4h3zm-20 9v-9h15v-2h-17v11h2zm18-7h-16v10h16v-10z" />
                </svg>
              </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
