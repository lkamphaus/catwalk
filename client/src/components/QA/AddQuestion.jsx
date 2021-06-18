import React, { useState } from "react";

import Modal from "./Modal.jsx";

import style from "./QuestionList.module.css";
import QuestionForm from "./QuestionForm.jsx";
import { VscAdd } from "react-icons/vsc";

const AddQuestion = (props) => {
  const [showModal, setShowModal] = useState(false);


  const openOnClick = () => {
    setShowModal(true);
  }

  const closeOnClick = () => {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={openOnClick}>
        ADD QUESTIONS
        <span style={{ marginTop: "30px", marginLeft: "10px"}}>
            <VscAdd />
          </span>
      </button>
      {showModal &&
        <Modal closeOnClick={closeOnClick}>
          <QuestionForm
            productId={props.productId}
            productName={props.productName}
            addQuestion={props.addQuestion}
          />
        </Modal>
      }
    </div>
  )
};

export default AddQuestion;