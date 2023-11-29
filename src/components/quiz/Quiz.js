import React, { useState, useEffect } from "react";
import parser from "html-react-parser";

function Quiz({ data }) {
  const { quiz, quizCount, nextHandler } = data;
  const [userAnswer, setUserAnswer] = useState(null);
  const [value, setValue] = useState(null);

  const question = quiz.results[quizCount].question;
  const shuffledAnswers = [...quiz.results[quizCount].incorrect_answers, quiz.results[quizCount].correct_answer].sort().reverse();

  useEffect(() => {
    setUserAnswer(null);
    setValue(null);
  }, [quizCount]);

  const submitHandler = (e) => {
    e.preventDefault();

    const isCorrect = quiz.results[quizCount].correct_answer === value;
    setUserAnswer(isCorrect);
  };

  const resetAnswer = () => {
    setUserAnswer(null);
    setValue(null);
  };

  const handleNextQuestion = () => {
    resetAnswer(); 
    nextHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <p className="correct-answers">Question Count: {quizCount+1}/10</p>
      <article className="container">
        <h2>{question}</h2>
        <div className="btn-container">
          {shuffledAnswers.map((answer, index) => (
            <div
              className={`answer-box ${userAnswer !== null && answer === quiz.results[quizCount].correct_answer ? 'correct' : ''}`}
              key={answer}
            >
              <input
                type="radio"
                name={`answer_${quizCount}`}
                id={`answer_${index}`}
                onChange={() => setValue(answer)}
              />
              <label className="answer-btn" htmlFor={`answer_${index}`}>
                {parser(answer)}
              </label>
            </div>
          ))}
        </div>
      </article>

      {userAnswer == null && (
        <div className="button-box">
            <button type="submit" className={`submit-btn ${userAnswer !== null ? (userAnswer ? 'correct' : 'incorrect') : ''}`}>
              Submit Question
            </button>
        </div>
      )}
      {userAnswer !== null && (
      <div className="button-box">
            <h4 className={`feedback ${userAnswer ? 'correct' : 'incorrect'}`}>
              {userAnswer ? 'Correct!' : `Incorrect. The correct answer is: ${quiz.results[quizCount].correct_answer}`}
            </h4>
            <button type="button" className="next-question" onClick={handleNextQuestion}>
              Next Question
            </button>
      </div>
      )}

    </form>
  );
}

export default Quiz;
