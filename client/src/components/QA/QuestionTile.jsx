import React, { useState, useEffect, Component } from "react";
import regeneratorRuntime from "regenerator-runtime";

import AnswerList from "./AnswerList.jsx";
import AddAnswer from "./AddAnswer.jsx";

import style from "./QuestionList.module.css";

const QuestionTile = (props) => {
  let [helpfulCount, setHelpfulCount] = useState(props.question.question_helpfulness);
  let [updated, setUpdate] = useState(false);

  const question_id = props.question.question_id;

  const handleHelpfulnessClick = async () => {
    setUpdate(true);

    if (!updated) {
      setHelpfulCount(helpfulCount + 1);
    }

    try {
      const response = await fetch(`/api/qa/questions/${question_id}/helpful`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          helpfulness: true
        })
      })
    } catch(err) {
      console.log("err", err)
    }
  }

  return (
    <div>
      <div className={style.questionBody}>
        <div className={style.questionLetter}>
          Q:
        </div>
        <div className={style.questionText}>
          {props.question.question_body}
        </div>
        <div className={style.questionHelpful}>
          Helpful?
        </div>
        <div
          className={style.questionHelpfulness}
          onClick={handleHelpfulnessClick}>
            Yes ({helpfulCount})
        </div>
        <div
          className={style.questionAddAnswer}>
          <AddAnswer
            questionId={question_id}
          />
        </div>
      </div>
      <div>
        <AnswerList
          questionAsker={props.question.asker_name}
          answers={Object.entries(props.question.answers)}
        />
      </div>
    </div>
  )
};

export default QuestionTile;