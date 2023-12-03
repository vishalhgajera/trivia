import React from 'react'
import { useResult } from "../../context/resultContext"; 
function Result() {

  const {totalQuiz, correct} = useResult();

  return (
    <section className="quiz">
        <h1>Result</h1>
        <h4>Total Questions Served : {totalQuiz}</h4>
        <h4>Total Correct Questions : {correct} </h4>
        <h4>Total Incorrect Questions : {totalQuiz - correct}</h4>
    </section>
  )
}

export default Result
