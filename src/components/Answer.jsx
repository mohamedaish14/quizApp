import { useRef } from "react";
export default function Answer({answers,selectedAnswer,answerState,onSelect}){

const arr=useRef();

if(!arr.current){
    arr.current=[...answers]
    arr.current.sort(()=>Math.random()-.5)
}
return(
 <ul id="answers">
            {arr.current.map((ans)=>{
                  const isSelected=selectedAnswer===ans;
                  let cssStyle='';
                  if(answerState==='answered'&& isSelected)
                  {cssStyle='selected';}
                  if((answerState==='correct'||answerState==='wrong')&&isSelected){
                    cssStyle=answerState;
                  }
              return(
                  
                    <li key={ans} className="answer">
                    <button
                     onClick={()=>onSelect(ans)}
                      className={cssStyle}>{ans}</button>
                </li>
            
                )
            }
                )}
        </ul>);
        }