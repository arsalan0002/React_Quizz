import React from 'react'
import questions from './QuizzData';
import Quizz from './Quizz';

const QuizzResult = (props) => {
  return (
    <div className="score-section">
      <h2>RESULT</h2>
      <p>Total Question :  <span>{questions.length}</span></p>
      <p>Your Score Is : <span> {props.marks}</span></p>
      <p> Correct Answers:<span> {props.showCorrectAnswer}</span></p>
      <p>  Wrong Answers:<span> {props.showWrongAnswer}</span></p>
      <button onClick={props.playAgain}>Again</button>
    </div>
  )
}

export default QuizzResult
