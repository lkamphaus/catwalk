import React, { useState, useEffect } from "react";
import style from "./QuestionList.module.css";

const AnswerList = (props) => {
  return (
    <div>
    {props.answers &&
    <div className={style.answerBody}>
      {props.answers.map(answer =>
        <div>A: {answer[1].body}</div>
      )}
    </div>
    }
    </div>
  );

 };

 export default AnswerList;