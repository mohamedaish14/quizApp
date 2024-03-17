import Answer from "./Answer.jsx";
import QuestionTimer from "./QuestuionTimer.jsx";
export default function Question({questiontext,answers,answerState,selectedAns,onSelectAns,onSkip}){
    return(<div id="question">
    <h2>{questiontext}</h2>
    
   <Answer
  
    answers={answers} 
   selectedAnswer={selectedAns}
   answerState={answerState}
   onSelect={onSelectAns} />
    <QuestionTimer 
   
     timeout={10000}
      onTimeout={onSkip} />
</div>);
}