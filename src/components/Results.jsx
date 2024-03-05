import questions from "../questions.js"
import complet from '../assets/quiz-complete.png'

export default function Results({userAnswers}){
const skipped=userAnswers.filter(ans=>ans===null);
const correct=userAnswers.filter((ans,ind)=>ans===questions[ind].answers[0]);
const skipedpercent=Math.round(
    (skipped.length)/userAnswers.length*100
);
const correctpercent=Math.round(
    (correct.length)/userAnswers.length*100
);
const wrong=100-skipedpercent-correctpercent;


    return <div id="summary">
    <img src={complet} alt='quiz is completed' />
    <h2>quiz completed </h2>
    <div id='summary-stats'>
        <p>
            <span className="number">{skipedpercent}%</span>
            <span className="text">skipped</span>
        </p>
        <p>
            <span className="number">{correctpercent}%</span>
            <span className="text">correct answers</span>
        </p>
        <p>
            <span className="number">{wrong}%</span>
            <span className="text">incorrect answers</span>
        </p>
        </div>
        <ol>
            {userAnswers.map((ans,index)=>{
                let cssclassStyle='user-answer';
                if(ans===null){
                    cssclassStyle+=' skipped';
                }else if(ans===questions[index].answers[0]){
                    cssclassStyle+=' correct';
                }else{
                      cssclassStyle+=' wrong';
                }
                return(
                  <li key={ans}>
                  <h3>{index+1}</h3>
                  <p className="question">{questions[index].text}</p>
                  <p className={cssclassStyle}>{ans}</p>
              </li>)
            })}
          
        </ol>
    </div>
    
}