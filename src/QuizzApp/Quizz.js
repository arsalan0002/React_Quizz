import React, { useState } from "react";
import './Quizz.css';
import questions from "./QuizzData";
import QuizzResult from './QuizzResult';

const Quizz = () => {
 const [currentQue,setCurrentQue] =useState(0);
 const [correctAns, setCorrectAns] = useState('');
 const [showResult, setShowResult] = useState(false);
 const [marks, setMarks] = useState(0);
 const [showCorrectAnswer, setShowCorrectAnswer] = useState(0);
 const [showWrongAnswer, setShowWrongAnswer] = useState(0);
 const [selectedAnsIndex, setSelectedAnsIndex] = useState(null);

     //Destructuring
const { question, options,correctAnswer} = questions[currentQue] 

const next = () =>{
    setSelectedAnsIndex(null)
    if(currentQue !== questions.length - 1) {
    setCurrentQue((prev) => prev +1)
    }
    else{
        setCurrentQue(0)
        setShowResult(true)
    }}

 const checkAns = (answer,index) => {
    setSelectedAnsIndex(index);
    if(answer === correctAnswer){
      setMarks(marks + 1);
      setShowCorrectAnswer(showCorrectAnswer + 1);
    //   console.log(marks);
      setCorrectAns(true);
      console.log(" Correct answer")
    }
    else{
        setCorrectAns(false);
        setShowWrongAnswer(showWrongAnswer + 1);
        console.log("Wrong answer")
    }}

    const addLeadingZero = (number) => (number > 9 ? number : `0${number }`)

    const playAgain = () => {
        setShowResult(false);
        setMarks(0);
        setShowCorrectAnswer(0);
        setShowWrongAnswer(0);
        setCurrentQue(0);
    }

    return (
        <>
          <div className="quiz-container">
          {showResult ? (<QuizzResult
           marks={marks}
           showCorrectAnswer={showCorrectAnswer}
           showWrongAnswer={showWrongAnswer}
           playAgain={playAgain}/>
          ) :(
           <>
        <div className="Question_Sec">
                
                <div className="Question_Count">
                <span className="active-question-no">
                     Q : {addLeadingZero(currentQue + 1)}
                    </span>
                <span className="total-question">
                    /{addLeadingZero(questions.length)}
                    </span>
                <div className="Question_Text">{question}</div>
                </div>
            </div>
            <ul>
                {options.map((answer,index) =>{
                    return(
                    <li  onClick={()=>checkAns(answer,index)} key={answer}
                    className={selectedAnsIndex === index ? 'selected-answer': null}> {answer}</li>
                    );

                })}
            </ul>

                <div className="actions">
                <button onClick={playAgain}>Quit</button>
                <button onClick={next} disabled={selectedAnsIndex === null} >
                 {currentQue === questions.length - 1 ? 'Submit' : 'Next'}
                 </button>
            </div>
        </>
   )}
         </div>  
        </>
    )
} 

export default Quizz;