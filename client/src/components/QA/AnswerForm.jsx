import React, { useState }  from "react";
import Modal from './Modal.jsx'
import style from "./QuestionList.module.css";

const AnswerForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [charCountName, setCharCountName] = useState(60);
  const [charCountEmail, setCharCountEmail] = useState(60);
  const [charCountBody, setCharCountBody] = useState(1000);
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    let input = event.target.value;

    setCharCountName(50 - input.length)
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    let input = event.target.value;

    setCharCountEmail(50 - input.length);
    setEmail(event.target.value);
  }

  const handleBodyChange = (event) => {
    let input = event.target.value;

    setCharCountBody(1000 - input.length);
    setBody(input);
  }

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }

    if (!body) {
      errors.body = 'Message body is required';
    }

    return errors;
  }

  const handleFormSubmit = async () => {
    const errors = validateForm();

    if (Object.keys(errors).length !== 0) {
      setError(errors);
    } else {
      let answerForm = {
        name,
        email,
        body,
        photos: []
      }

      try {
        const response = await fetch(`/api/qa/questions/${props.questionId}/answers`, {
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
  }

  const styleNameInput = error ? style.dangerOutline : style.formName;

  const styleEmailInput = error ? style.dangerOutline : style.formEmail;

  const styleBodyInput = error ? style.dangerBodyOutline : style.formBody;


  return (
    <div>
      <div className={style.form}>
        <h3>Submit Your Answer</h3>
        <div><span className={style.productName}>{props.productName}</span>: {props.questionBody}</div>
        <div className={style.inputContainer}>
          <div className={style.labelForm}>What is your nickname</div>
          <div>
            <input
              className={styleNameInput}
              name="name"
              type="text"
              placeholder="Example: jack543!"
              value={name || ''}
              maxlength = "60"
              required
              onChange={handleNameChange}
            />
             {error.name && (
                <p className={style.danger}>{error.name}</p>
             )}
            <div className={style.charCount}>Characters left <span className={style.charCountBold}>{charCountName}</span></div>
          </div>
          <div className={style.labelForm}>Your email</div>
          <div>
            <input
              className={styleEmailInput}
              name="email"
              type="test"
              placeholder="Example: jack@email.com"
              value={email || ''}
              maxlength = "60"
              required aria-required="true"
              onChange={handleEmailChange}
            />
             {error.email && (
                <p className={style.danger}>{error.email}</p>
             )}
            <div className={style.charCount}>Characters left <span className={style.charCountBold}>{charCountEmail}</span></div>
          </div>
          <div className={style.labelForm}>Your Answer</div>
          <div>
            <textarea
              className={styleBodyInput}
              name="body"
              type="test"
              placeholder="Write here..."
              value={body || ''}
              maxlength = "1000"
              required aria-required="true"
              onChange={handleBodyChange}
            />
             {error.body && (
                <p className={style.danger}>{error.body}</p>
             )}
            <div className={style.charCount}>Characters left <span className={style.charCountBold}>{charCountBody}</span></div>
          </div>
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
  );
}

export default AnswerForm;