import { useState,useCallback } from "react";
import questions from '../questions.js'
import Results from "./Results.jsx";
import Question from "./Question.jsx";


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
    },1000)
},10);
},[currentQuestionIndex]);



const handleSkipAnswer=useCallback(
    ()=>handelSelectAnswer(null),[handelSelectAnswer]
)



if(completed){
    return <Results userAnswers={userAnswers} />
}



   
return(
    
        <div id="quiz">
  <Question 
  key={currentQuestionIndex}
  questiontext={questions[currentQuestionIndex].text}
   answers={questions[currentQuestionIndex].answers}  
   answerState={answerState}
   selectedAns={userAnswers[userAnswers.length-1]}
   onSelectAns={handelSelectAnswer}
   onSkip={handleSkipAnswer} />
  
    </div>)

}