import React, { useState } from "react";
import AnswerTile from "./AnswerTile.jsx";
import style from "./QuestionList.module.css";

const AnswerList = (props) => {
  const [preview, setPreview] = useState(true);

  const handleMoreAnswersClick = () => {
    setPreview(!preview);
  }

  const answerList = preview && props.answers ? props.answers.slice(0, 2) :
  props.answers;

  const moreAnswers = preview ?  'See more answers' : 'Collapse answers';

  return (
    <div>
    {props.answers &&
      <div className={style.answerSection}>
          {answerList.map(answer =>
            <AnswerTile answer={answer[1]} key={answer[1].id}/>
          )}
      </div>
    }
    <div
      className={style.loadMoreAnswers}
      onClick={handleMoreAnswersClick}>
        {moreAnswers}
    </div>
    </div>
  );

 };
 export default AnswerList;