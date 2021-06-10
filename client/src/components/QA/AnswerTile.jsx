import React, { useState} from "react";
import style from "./QuestionList.module.css";
import { DateTime } from "luxon";

const AnswerTile = (props) => {
  let [helpfulCount, setHelpfulCount] = useState(props.answer.helpfulness);
  let [updated, setUpdate] = useState(false);

  const handleHelpfulnessClick = () => {
    setUpdate(true);

    if (!updated) {
      setHelpfulCount(helpfulCount + 1);
    }
  }

  let answerNameStyle = props.answer.answerer_name === 'Seller' ? style.answerNameBold : style.answerName;

  return (
    <div>
      <div className={style.answerBody}>
        <div className={style.answerLetter}>
          A:
        </div>
        <div className={style.answerText}>
          {props.answer.body}
        </div>
      </div>
      <div className={style.answerMeta}>
        <div className={answerNameStyle}>
          by {props.answer.answerer_name}
        </div>
        <div className={style.answerDate}>
          {DateTime.fromISO(props.answer.date).toFormat('DDD')}
        </div>
        <div className={style.answerHelpful}>
          Helpful?
        </div>
        <div
          className={style.answerHelpfulness}
          onClick={handleHelpfulnessClick}>
            Yes ({helpfulCount})
        </div>
        <div className={style.answerReport}>
          Report
        </div>
      </div>
    </div>
  );
};

export default AnswerTile;