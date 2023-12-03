import React, { useState, useEffect } from "react";
import Answer from "../answer/Answer";
import Button from "../button/Button";

function Quiz({ data }) {
  const { quiz, quizCount, nextHandler , totalQuiz , correct, setCorrect} = data;

  const [userAnswer, setUserAnswer] = useState(null);
  const [value, setValue] = useState(null);
  const [isValid, setIsValid] = useState(true);


  const question = quiz.results[quizCount].question;
  const shuffledAnswers = [...quiz.results[quizCount].incorrect_answers, quiz.results[quizCount].correct_answer].sort().reverse();
  const correctAnswer = quiz.results[quizCount].correct_answer;
  useEffect(() => {
    setUserAnswer(null);
    setValue(null);
    setIsValid(true);
  }, [quizCount]);

  const submitHandler = (e) => {
    e.preventDefault();

    const isCorrect = quiz.results[quizCount].correct_answer === value;
    
    if(value){
      setUserAnswer(isCorrect);
      setIsValid(true);
      if(isCorrect){
        setCorrect(correct+1);
      }
      }
      else{
        setIsValid(false);
      }
  };

  const resetAnswer = () => {
    setUserAnswer(null);
    setValue(null);
  };

  const handleNextQuestion = () => {
    resetAnswer(); 
    nextHandler();
  };

  const handleAnswer = (val) => {
   setValue(val);
   setIsValid(true);
  }

  return (
    <form onSubmit={submitHandler}>
      <p className="correct-answers">Question Count: {quizCount+1}/{totalQuiz}</p>
      <article className="container">
        <h2>{question}</h2>
        <div className="btn-container">
          {shuffledAnswers.map((answer, index) => (
            <Answer key={answer} ans={{answer,correctAnswer,quizCount,userAnswer,index,handleAnswer}} />
          ))}
        </div>
      </article>
      {userAnswer == null && (
        <div className="button-box">
            <Button type="submit" className={`submit-btn ${userAnswer !== null ? (userAnswer ? 'correct' : 'incorrect') : ''}`}>
              Submit Question
            </Button>
            {!isValid && <h4 className='feedback incorrect'>Select any answer</h4>}
        </div>
      )}
      {userAnswer !== null && (
      <div className="button-box">
            <h4 className={`feedback ${userAnswer ? 'correct' : 'incorrect'}`}>
              {userAnswer ? 'Correct!' : `Incorrect. The correct answer is: ${correctAnswer}`}
            </h4>
            <Button type="button" className="next-question" onClick={handleNextQuestion}>
              Next Question
            </Button>
      </div>
      )}

    </form>
  );
}

export default Quiz;
