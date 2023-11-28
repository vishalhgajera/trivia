import React from 'react'

function Quiz({data}) {
    const{quiz,quizCount} = data
    console.log(quizCount);
    const question = quiz.results[quizCount].question;
    const answerArry = [...quiz.results[quizCount].incorrect_answers,quiz.results[quizCount].correct_answer].sort().reverse()

    const submitHandler = () =>{

    }

  return (
    <React.Fragment>
        <p className="correct-answers">correct answers:0/0</p>
        <article className="container">
            <h2>
            {question}
            </h2>
            <div className="btn-container">
                {answerArry.map(answere => (
                <button key={answere} className="answer-btn">{answere}</button>
                ))}
            </div>
        </article>
      <button className="submit-btn" onClick={submitHandler}>Submit Question</button>
    </React.Fragment>
  )
}

export default Quiz
