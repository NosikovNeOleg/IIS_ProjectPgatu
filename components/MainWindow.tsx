import { Radio } from '@nextui-org/react';
import { Question } from "@/questions/Question";
import { questions } from '@/questions/list_of_questions'
import { GlobalAnswer } from "@/answers/GlobalAnswer"
import { answers } from "@/answers/list_of_answers"
import { Button } from '@nextui-org/react'
import { useState } from 'react';




export default function MainWindow() {

    const [number, setNumber] = useState(0);

    return (
            <div className="mainWindow">
                {number != 3 ? (
                        <Question question={questions[number]}/>
                        ) : (
                                <GlobalAnswer answer={answers[0]} />
                        )
                }
                {
                number != 3 ? (
                        <Button  className="answerButton" onClick={ () =>{
                            setNumber(number + 1)
                        }}></Button>
                            ) : ( null )
                }
            </div>
            )
}