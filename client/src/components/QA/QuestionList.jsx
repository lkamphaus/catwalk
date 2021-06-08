import React, { useState, useEffect } from "react";
import AnswerList from "./AnswerList.jsx";
import SearchBox from "./SearchBox.jsx";
import style from "./QuestionList.module.css";

const QuestionList = (props) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch(`/api/qa/questions?product_id=${props.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => setQuestion(data))
      .catch(err => console.log("err", err))
  }, []);

    return (
      <div className={style.qaSection}>
        <div>
          <div className={style.qaTitle}>
            <div>QUESTIONS & ANSWERS</div>
          </div>
          <div>
            <SearchBox/>
          </div>
            {question &&
            <div>
                {question.results.map(question =>
                  <div className={style.question}>
                    <div className={style.questionTitle}>Q: {question.question_body}</div>
                    <div className={style.questionHelpfulness}>
                       Yes ({question.question_helpfulness})
                    </div>
                    <div>
                      <AnswerList answers={Object.entries(question.answers)}/>
                    </div>
                  </div>
                )}
            </div>
            }
            <div>
              <button>MORE ANSWERED QUESTIONS</button>
              <button>ADD QUESTIONS +</button>
            </div>
        </div>
      </div>
    )

};

export default QuestionList;
