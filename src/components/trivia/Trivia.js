import React, { useEffect, useState } from "react";
import { fetchQuiz } from "../../store/quizSlice";
import { useSelector,useDispatch } from "react-redux";
import Quiz from "../quiz/Quiz";

function Trivia() {

  const dispatch = useDispatch();
  const {quiz,isLoaded,error} = useSelector(state=>state.quiz);
  const [quizCount,setQuizCount] = useState(0);

  console.log({quiz,isLoaded,error});

  useEffect(() => {
    dispatch(fetchQuiz())
    return () => {
    }
  }, [dispatch])
  
  const nextHandler = (count) => {
    if(quizCount<9){
      setQuizCount(count+1)
    }
  }

  return (
    <section className="quiz">
      {isLoaded &&
        <React.Fragment>
          <Quiz data={{quiz,quizCount}}/>
          <button className="next-question" onClick={e=>nextHandler(quizCount)}>next question</button>
        </React.Fragment>
      }
      {!isLoaded &&
          <h2 >
            Loading...
          </h2>
      }
    </section>
  );
}

export default Trivia;
