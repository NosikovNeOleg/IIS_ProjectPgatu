
import { Question } from "@/questions/Question";
import { questions } from '@/questions/list_of_questions'
import { GlobalAnswer } from "@/answers/GlobalAnswer"
import { answers } from "@/answers/list_of_answers"
import { Button } from '@nextui-org/react'
import { useState } from 'react';
import { IViewMain } from '@/components/IViewMain';



let view : number; 


export default function MainWindow( ) {

    const [number, setNumber] = useState(0);
    const [id , updateId] = useState("1");

    const buttonText = "Ответить";

    function findQuestion(elem : IViewMain){
        return elem.id ==  Number.parseInt(id);
    }
    view =  questions.findIndex(findQuestion);
    

    return (
            <div className="mainWindow">
                { view != -1 ? (
                        <Question question={questions[view]}/>
                        ) : (
                                <GlobalAnswer answers={answers}/>
                        )
                }
                {
                view != -1 ? (
                        <Button  className="answerButton" onPress={ () =>{
                            if (checked != ""){
                                answers[number] = {
                                    id : number,
                                    code: number.toString(),
                                    text: questions[view].text,
                                    answers : [{
                                        a_id : 1,
                                        text: checked}]
                                }
                                updateId(id => id + global.checkedId)
                                setNumber(number => number + 1)
                                checked = "";
                            }
                        }}>{buttonText}</Button>
                            ) : ( null )
                }<p>{view + " " + id}</p>
                
            </div>
            )
            }