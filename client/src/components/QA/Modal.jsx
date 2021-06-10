import React, { useState, useEffect } from "react";

import style from "./QuestionList.module.css";
import { HiOutlineX } from 'react-icons/hi';

const AnswerModal = ({ handleCloseAnswerClick, showModal, setShowModal, questionId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

  const handleFormSubmit = async () => {
    let answerForm = {
      name,
      email,
      body,
      photos: []
    }

    try {
      const response = await fetch(`/api/qa/questions/${questionId}/answers`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answerForm)
      })
    } catch(err) {
      console.log("err", err)
    }
  }

  return (
    <div>
      {showModal ? (
        <div
          className={style.backgroundModal}>
          <div
            className={style.modalWrapper}
            showModal={showModal}>
            <div className={style.modalContent}>
              <div
                className={style.closeIcon}
                onClick={handleCloseAnswerClick}>
                  <HiOutlineX />
              </div>
                <div className={style.form}>
                  <label className={style.labelForm}>Name</label>
                  <div>
                    <input
                      className={style.formName}
                      type="text"
                      placeholder="Example: jack543!"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <label className={style.labelForm}>Email</label>
                  <div>
                    <input
                      className={style.formEmail}
                      type="test"
                      placeholder="Example: jack@email.com"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <label className={style.labelForm}>Answer Body</label>
                  <div>
                    <textarea
                      className={style.formBody}
                      type="test"
                      placeholder="Write here..."
                      value={body}
                      onChange={handleBodyChange}
                    />
                  </div>
                </div>
              <div
                className={style.formButton}>
                <button
                  onClick={handleFormSubmit}>
                    Submit
                </button>
              </div>
            </div>
          </div>
        </div>
    ) : null}
  </div>
  )
};

export default AnswerModal;