import React, { useState, useEffect } from "react";
import AnswerList from "./AnswerList.jsx";
import SearchBox from "./SearchBox.jsx";
import style from "./QuestionList.module.css";

const QuestionList = (props) => {
  const [questions, setQuestion] = useState(null);
  const [preview, setPreview] = useState(true);

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

  const getQuestionList = () => {
    if (!questions) {
      return [];
    }

    if (preview) {
      return questions.results.slice(0, 4);
    }

    return questions.results;
  }

  const questionsList = getQuestionList();

  const handleMoreQuestionsClick = () => {
    setPreview(!preview);
  }

  const addMoreQuestions = preview ? 'MORE ANSWERED QUESTIONS' : 'HIDE ANSWERED QUESTIONS';

  return (
    <div className={style.qaSection}>
      <div>
        <div className={style.qaTitle}>
          <div>QUESTIONS & ANSWERS</div>
        </div>
        <div>
          <SearchBox/>
        </div>
          {questions &&
          <div>
              {questionsList.map(question =>
                <div>
                  <div className={style.questionBody}>
                    <div className={style.questionLetter}>
                      Q:
                    </div>
                    <div className={style.questionText}>
                      {question.question_body}
                    </div>
                    <div className={style.questionHelpful}>
                      Helpful?
                      </div>
                    <div className={style.questionHelpfulness}>
                        Yes ({question.question_helpfulness})
                    </div>
                    <div className={style.questionAddAnswer}>
                      Add Answer
                    </div>
                  </div>
                  <div>
                    <AnswerList
                      answers={Object.entries(question.answers)}
                    />
                  </div>
                </div>
              )}
          </div>
          }
          <div>
            <button onClick={handleMoreQuestionsClick}>
              {addMoreQuestions}
            </button>
            <button>
              ADD QUESTIONS +
            </button>
          </div>
      </div>
    </div>
  )

};

export default QuestionList;
