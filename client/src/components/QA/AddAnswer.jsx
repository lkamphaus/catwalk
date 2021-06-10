import React, { useState } from "react";

import Modal from "./Modal.jsx";
import AnswerForm from "./AnswerForm.jsx";

import style from "./QuestionList.module.css";

const AddAnswer = (props) => {
  const [showModal, setShowModal] = useState(false);


  const openOnClick = () => {
    setShowModal(true);
  }

  const closeOnClick = () => {
    setShowModal(false);
  }

  return (
    <div>
      <div onClick={openOnClick}>
        Add Answer
      </div>
      {showModal &&
        <Modal closeOnClick={closeOnClick}>
          <AnswerForm />
        </Modal>
      }
    </div>
  )
};

export default AddAnswer;