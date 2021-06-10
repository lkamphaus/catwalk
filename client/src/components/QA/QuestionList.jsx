import React, { useState, useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";

import SearchBox from "./SearchBox.jsx";
import QuestionTile from "./QuestionTile.jsx";
import AddQuestion from "./AddQuestion.jsx";

import style from "./QuestionList.module.css";

const QuestionList = (props) => {
  const [questions, setQuestion] = useState(null);
  const [preview, setPreview] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(async () => {
    try {
      const response = await fetch(`/api/qa/questions?product_id=${props.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json();
      setQuestion(data);
    } catch(err) {
      console.log("err", err)
    }
  }, []);

  const getQuestionList = () => {
    if (!questions) {
      return [];
    }

    if (search.length >= 3) {
      let filteredList = questions.results.filter(question => {
        return question.question_body.toLowerCase().includes(search.toLowerCase())
      })
      return filteredList;
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

  const searchQuestionList = (searchTerm) => {
    setSearch(searchTerm);
  }

  const addMoreQuestions = preview ? 'MORE ANSWERED QUESTIONS' : 'COLLAPSE ANSWERED QUESTIONS';

  return (
    <div className={style.qaSection}>
      <div>
        <div className={style.qaTitle}>
          <div>QUESTIONS & ANSWERS</div>
        </div>
        {questions &&
        <div>
          <div>
            <SearchBox
            searchQuestionList={searchQuestionList}/>
          </div>
          <div>
              {questionsList.map(question =>
                <QuestionTile
                question={question}
                key={question.question_id}/>
              )}
          </div>
        </div>
        }
        <div className={style.questionListButtons}>
          <button
            onClick={handleMoreQuestionsClick}>
              {addMoreQuestions}
          </button>
          <AddQuestion />
        </div>
      </div>
    </div>
    console.log('hello');
  )
};

export default QuestionList;
