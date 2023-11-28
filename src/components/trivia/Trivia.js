import React, { useEffect } from "react";
import { fetchQuiz } from "../../store/quizSlice";
import { useSelector,useDispatch } from "react-redux";

function Trivia() {

  const dispatch = useDispatch();
  const {quiz,isLoaded,error} = useSelector(state=>state.quiz)

  console.log({quiz,isLoaded,error});

  useEffect(() => {
    dispatch(fetchQuiz())
    return () => {
    }
  }, [dispatch])
  

  return (

    <section className="quiz">
      <p className="correct-answers">correct answers:0/0</p>
      <article className="container">

        {isLoaded &&
          <h2>
          {quiz.results[0].question}
          </h2>
        }
        {!isLoaded &&
          <h2 >
          Which one of these superhero teams appears in the Invincible comics?
          </h2>
        }

        <div className="btn-container">
          <button className="answer-btn">Avengers</button>
          <button className="answer-btn">Justice League</button>
          <button className="answer-btn">Guardians of the Globe</button>
          <button className="answer-btn">Teenage Mutant Ninja Turtles</button>
        </div>
      </article>
      <button className="next-question">next question</button>
    </section>
  );
}

export default Trivia;
