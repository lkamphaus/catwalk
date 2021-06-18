import React, { useState } from "react";
import Modal from ".././reviews/Modal.jsx";
import style from "./QuestionList.module.css";
import styleReview from ".././reviews/Reviews.module.css";
import { HiOutlineX } from 'react-icons/hi';

const Thumbnail = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openOnClick = () => {
    setShowModal(!showModal);
  }

   return (
     <div>
      <img
        onClick={openOnClick}
        className={style.smallImg}
        src={`${props.source}`}
      />
      {showModal &&
        <Modal>
          <div
            className={style.closeIcon}>
            <HiOutlineX />
          </div>
          <div className={styleReview.modal}>
            <img
              src={props.source}
              onClick={openOnClick}
            />
          </div>
        </Modal>
      }
     </div>
   )
}

export default Thumbnail;
