import React from "react";

function Trivia() {
  return (
    <section className="quiz">
      <p className="correct-answers">correct answers:0/0</p>
      <article className="container">
        <h2>
          Which one of these superhero teams appears in the Invincible comics?
        </h2>
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
