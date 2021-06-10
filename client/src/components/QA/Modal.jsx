import React, { useState } from "react";
import style from "./QuestionList.module.css";
import { HiOutlineX } from 'react-icons/hi';

const Modal = (props) => {
  return (
    <div>
      <div
        className={style.backgroundModal}>
        <div
          className={style.modalWrapper}>
          <div className={style.modalContent}>
            <div
              className={style.closeIcon}
              onClick={props.closeOnClick}>
                <HiOutlineX />
            </div>
            <div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;