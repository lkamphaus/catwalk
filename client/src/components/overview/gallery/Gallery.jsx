import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Thumbnails from "./Thumbnails.jsx";
import ModalThumbs from "./ModalThumbs.jsx";
import Modal from "/Users/jacobmelnick/web/starfire-project-catwalk/client/src/components/reviews/Modal.jsx";
const Gallery = ({
  images,
  handleThumb,
  currentThumb,
  thumbValue,
  firstImg,
  thumbnailUrl,
  currentImageSet,
  images2,
  styleValue,
  thumbnailValue
}) => {
  const [zoom, setZoom] = useState(0);
  const [expandedOpen, setExpandedOpen] = useState(false);
  const [arrowSelected, setArrowSelected] = useState("");
  const [thumbModalValue, setThumbModalValue] = useState(false);

  const handlesArrows = () => {
    setThumbModalValue(true)
    setArrowSelected(currentImageSet.thumbnail_url)
  };

  
  return (
    <div>
      <div
        className={style.arrows}
        id={style.right}
        onClick={() => {
          handlesArrows();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
      <div>
        {currentThumb && thumbValue === true ? (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={currentThumb}
          ></img>
        ) : !currentImageSet.url ? (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={images.map((item) => item.map((img) => img.url))}
          ></img>
        ) : (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={currentImageSet.url}
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
            <div className={style.modalThumbs} id={style.thumbModals}>
              {images &&
                images.map((item) =>
                  item.map((img) => (
                    <ModalThumbs
                      handleThumb={handleThumb}
                      thumbUrl={img.thumbnail_url}
                      key={item}
                    />
                  ))
                )}
            </div>

            <div
              onClick={() => setZoom(zoom + 1)}
              className={zoom % 2 === 1 ? style.expanded : null}
              style={{
                height: "100%",
                width: "50%",
                background:
                  !currentImageSet.url && !currentThumb && firstImg
                    ? `url('${firstImg[0].join()}') no-repeat `
                    : currentThumb && thumbValue === true
                    ? `url('${currentThumb}') no-repeat center center / cover`
                    : `url('${currentImageSet.url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                transition: "transform .8s ease",
                cursor: zoom % 2 === 1 ? "zoom-out" : "crosshair",
              }}
            ></div>

            <div
              onClick={() => {
                setExpandedOpen(false);
              }}
              style={{
                marginBottom: "680px",

                cursor: "pointer",
                float: "right",
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
