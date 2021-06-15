import React, { useEffect, useState, useCallback } from "react";
import style from "../MainOverview.module.css";
import Thumbnails from "./Thumbnails.jsx";
import ModalThumbs from "./ModalThumbs.jsx";
import Modal from "../../reviews/Modal.jsx";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Gallery = ({
  images,
  handleThumb,
  currentThumb,
  thumbValue,
  firstImg,
  thumbnailUrl,
  currentImageSet,
  handleArrowValue,
  thumbModalValue,
}) => {
  const [zoom, setZoom] = useState(0);
  const [expandedOpen, setExpandedOpen] = useState(false);
  const [arrowSelected, setArrowSelected] = useState("");
  const [arrowIndex, setArrowIndex] = useState(0);
  const [arrowModal, setArrowModal] = useState(false)

  const handlesArrows = () => {
    handleArrowValue();
    if (arrowIndex >= images.length) {
      setArrowIndex(0);
      setArrowSelected(images[0][0].thumbnail_url);
    } else {
      setArrowSelected(images[arrowIndex][0].thumbnail_url);
      setArrowIndex(arrowIndex + 1);
    }
  };



  const handlesArrowsLeft = () => {
    handleArrowValue();

    if (arrowIndex < 0) {
      setArrowIndex(images.length);

      setArrowSelected(images[images.length - 1][0].thumbnail_url);
    } else {
      setArrowIndex(arrowIndex - 1);
      setTimeout(() => {
        setArrowSelected(images[arrowIndex][0].thumbnail_url);
      }, 0);
    }
  };

  const handleThumbnailIndex = (e) => {
    console.log(e.target.src);
  };

  return (
    <div className={style.mainGallery}>

        <div
          className={style.arrows}
          id={style.right}
          onClick={() => {
            handlesArrowsLeft();
          }}
        >
          <MdKeyboardArrowLeft/>
        </div>

      <div
        className={style.thumbs}
        onClick={(e) => {
          handleThumbnailIndex(e);
        }}
      >
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
        {/* <div className={style.bigImage}>
          </div> */}
      </div>

      <div>
        {currentThumb && thumbValue === true ? (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={thumbModalValue ? arrowSelected : currentThumb}
          ></img>
        ) : !currentImageSet.url ? (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={
              firstImg && !thumbModalValue ? firstImg[0].join() : arrowSelected
            }
          ></img>
        ) : (
          <img
            onClick={() => setExpandedOpen(true)}
            className={style.image}
            src={thumbModalValue ? arrowSelected : currentImageSet.url}
          ></img>
        )}
      </div>
      {images && arrowIndex !== images.length && (
        <div
          className={style.arrows}
          id={style.right}
          onClick={() => {
            handlesArrows();
          }}
        >
        <MdKeyboardArrowRight/>
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
            <div
              style={{ marginBottom: "300px", marginRight: "20px" }}
              className={style.arrows}
              id={style.right}
              onClick={() => {
                handlesArrows();
                setArrowModal(true)
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
                  !currentImageSet.url && !currentThumb && firstImg && !arrowModal
                    ? `url('${firstImg[0].join()}') no-repeat `
                    : currentThumb && thumbValue === true
                    ? `url('${currentThumb}') no-repeat center center / cover`
                    : thumbModalValue
                    ? `url(${arrowSelected}) no-repeat center center / cover`
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
            <div
              style={{ marginBottom: "300px" }}
              className={style.arrows}
              id={style.right}
              onClick={() => {
                handlesArrowsLeft();
                setArrowModal(true)
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
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
