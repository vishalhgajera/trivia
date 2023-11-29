import React, { useEffect, useState } from "react";
import { fetchQuiz } from "../../store/quizSlice";
import { useSelector, useDispatch } from "react-redux";
import Quiz from "../quiz/Quiz";
import { useNavigate } from "react-router-dom";

function Trivia() {
  const dispatch = useDispatch();
  const { quiz, isLoaded, error } = useSelector((state) => state.quiz);
  const [quizCount, setQuizCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const nextHandler = () => {
    if (quizCount < 9) {
      setQuizCount((count) => count + 1);
    }
    else{
      navigate('/result')
    }
  };

  return (
    <section className="quiz">
      {!error && 
        <React.Fragment>
          {isLoaded &&  <Quiz data={{ quiz, quizCount, nextHandler }} />}

          {!isLoaded && <h2>Loading...</h2>}
        </React.Fragment>
      }
      {error && <h2>{error}</h2>}
    </section>
  );
}

export default Trivia;
