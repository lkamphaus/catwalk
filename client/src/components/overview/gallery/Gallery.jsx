import React, { useEffect, useState, useCallback } from "react";
import style from "../MainOverview.module.css";
import Thumbnails from "./Thumbnails.jsx";
import ModalThumbs from "./ModalThumbs.jsx";
import Modal from "../../reviews/Modal.jsx";
const Gallery = ({
  images,
  handleThumb,
  currentThumb,
  thumbValue,
  firstImg,
  currentImageSet,
  thumbModalValue,
  arrowIndex,
  arrowSelected,
  handleArrowRight,
  handleArrowLeft,
}) => {
  const [zoom, setZoom] = useState(0);
  const [expandedOpen, setExpandedOpen] = useState(false);
  const [arrowModal, setArrowModal] = useState(false);
  const [selectedThumb, setSelectedThumb] = useState("");
  const handleThumbnailIndex = (e, item) => {
    setSelectedThumb(item[0].thumbnail_url);
  };
  return (
    <div className={style.mainGallery}>
      {arrowIndex !== 0 && (
        <div
          className={style.arrows}
          id={style.right}
          onClick={() => {
            setArrowModal(true);
            handleArrowLeft();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </div>
      )}
      <div className={style.thumbs}>
        {images &&
          images.map((item) =>
            item.map((img) => (
              <div
                onClick={(e) => {
                  handleThumbnailIndex(e, item);
                }}
                style={{
                  border:
                    img.thumbnail_url === selectedThumb && thumbValue
                      ? "3px #D96C06 solid"
                      : null,
                  maxHeight: "75px",
                }}
              >
                <Thumbnails
                  images={images}
                  handleThumb={handleThumb}
                  thumbUrl={img.thumbnail_url}
                  key={item}
                />
              </div>
            ))
          )}
        <div style={{ marginLeft: "30%", padding: "5%", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </div>
      </div>
      {images.length > 0 && (
        <div>
          {currentThumb && thumbValue === true ? (
            <img
              onClick={() => setExpandedOpen(true)}
              className={style.image}
              src={
                thumbModalValue
                  ? images[arrowIndex][0].thumbnail_url
                  : currentThumb
              }
            ></img>
          ) : !currentImageSet.url ? (
            <img
              onClick={() => setExpandedOpen(true)}
              className={style.image}
              style={{ maxWidth: "100%", minWidth: "100%" }}
              src={
                firstImg && !thumbModalValue
                  ? firstImg[0].join()
                  : images[arrowIndex][0].thumbnail_url
              }
            ></img>
          ) : (
            <img
              onClick={() => setExpandedOpen(true)}
              className={style.image}
              src={
                thumbModalValue
                  ? images[arrowIndex][0].thumbnail_url
                  : currentImageSet.url
              }
            ></img>
          )}
        </div>
      )}
      {images && arrowIndex !== images.length - 1 && (
        <div
          className={style.arrows}
          id={style.right}
          onClick={() => {
            handleArrowRight();
            setArrowModal(true);
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
      )}
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
            {arrowIndex !== 0 && (
              <div
                style={{ marginBottom: "300px", marginRight: "20px" }}
                className={style.arrows}
                id={style.right}
                onClick={() => {
                  handleArrowLeft();
                  setArrowModal(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
              </div>
            )}
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
                  !currentImageSet.url &&
                  !currentThumb &&
                  firstImg &&
                  !arrowModal &&
                  images
                    ? `url('${firstImg[0].join()}') no-repeat `
                    : currentThumb && thumbValue === true
                    ? `url('${currentThumb}') no-repeat center center / cover`
                    : thumbModalValue
                    ? `url(${images[arrowIndex][0].thumbnail_url}) no-repeat center center / cover`
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
            {images && arrowIndex !== images.length - 1 && (
              <div
                style={{ marginBottom: "300px" }}
                className={style.arrows}
                id={style.right}
                onClick={() => {
                  handleArrowRight();
                  setArrowModal(true);
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
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};
export default Gallery;
