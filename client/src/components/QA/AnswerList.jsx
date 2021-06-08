import React, { useState, useEffect } from "react";
import style from "./QuestionList.module.css";

const AnswerList = (props) => {
  const [preview, setPreview] = useState(true);

  const handleMoreAnswersClick = () => {
    setPreview(!preview);
  }

  const answerList = preview && props.answers ? props.answers.slice(0, 2) :
  props.answers;

  const moreAnswers = preview ?  'Load more answers' : 'Hide answers';

  console.log('answers', props.answers);

  return (
    <div>
    {props.answers &&
    <div className={style.answerSection}>
      {answerList.map(answer => {
      return (
        <div>
          <div className={style.answerBody}>
            <div className={style.answerLetter}>
              A:
            </div>
            <div className={style.answerText}>
              {answer[1].body}
            </div>
          </div>
          <div className={style.answerMeta}>
            <div>
              by {answer[1].answerer_name}
            </div>
            <div className={style.answerDate}>
              {answer[1].date}
            </div>
            <div className={style.answerHelpful}>
              Helpful?
            </div>
            <div className={style.answerHelpfulness}>
              Yes ({answer[1].helpfulness})
            </div>
            <div className={style.answerReport}>
              Report
            </div>
          </div>
        </div>)
      })}
    </div>
    }
    <div onClick={handleMoreAnswersClick} className={style.loadMoreAnswers}>
      {moreAnswers}
    </div>
    </div>
  );

 };

 export default AnswerList;