import { useState,useCallback } from "react";
import questions from '../questions.js'
import completedQuizImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestuionTimer.jsx";
import Results from "./Results.jsx";
export default function Quiz(){

    const [userAnswers,setAnswers]=useState([]);
    const [answerState,setAnswerState]=useState('');
    const currentQuestionIndex=answerState===''?userAnswers.length:userAnswers.length-1;
    const completed= questions.length===currentQuestionIndex;

const handelSelectAnswer=useCallback(function 
    handelSelectAnswer(selectedAns){
        setAnswerState('answered');
    setAnswers((prevAnswers)=>{
    return [...prevAnswers,selectedAns]
});
setTimeout(()=>{
    if(selectedAns===questions[currentQuestionIndex].answers[0]){
        setAnswerState('correct');
    }else{
        setAnswerState('wrong');
    }
    setTimeout(()=>{
        setAnswerState('');
    },2000)
},10);
},[currentQuestionIndex]);

const handleSkipAnswer=useCallback(
    ()=>handelSelectAnswer(null),[handelSelectAnswer]
)
if(completed){
    return <Results userAnswers={userAnswers} />
}
else{
return(
    
        <div id="quiz">
        <div id="question">
        <h2>{questions[currentQuestionIndex].text}</h2>
        <ul id="answers">
            {questions[currentQuestionIndex].answers.map((ans)=>{
                  const isSelected=userAnswers[userAnswers.length-1]===ans;
                  let cssStyle='';
                  if(answerState==='answered'&& isSelected)
                  {cssStyle='selected';}
                  if((answerState==='correct'||answerState==='wrong')&&isSelected){
                    cssStyle=answerState;
                  }
                return(
                  
                    <li key={ans} className="answer">
                    <button
                     onClick={()=>handelSelectAnswer(ans)}
                      className={cssStyle}>{ans}</button>
                </li>
            
                )
            }
                )}
        </ul>
        <QuestionTimer key={currentQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
    </div>
    </div>)

}}