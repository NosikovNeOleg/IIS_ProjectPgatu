import { IViewMain } from "@/components/IViewMain";
import { MicroAnswer } from "./MicroAnswer";
import {expertChoice} from "./expertChoice"
import { Button } from "@nextui-org/react";
import  pictures from "../answers/pictures/1.png";
import {Images} from "./Images";

interface GlobalAnswerProps {
    answers: IViewMain[]
    id : string
}

export function GlobalAnswer({answers, id}: GlobalAnswerProps){

    const buttonText = "Начать снова"

    var view : number;
    var answer : IViewMain;
    

    function findAnswer(elem : IViewMain){
        return elem.code ==  id;
    }
    view = expertChoice?.findIndex(findAnswer)
    answer = expertChoice[view]
    
    var src : string
    

    return (
            <div>
                <div className="text-center text-2xl font-mono">{"Итог"}</div>
                <div className="topBorder"></div>
                {
                answers?.map(answer => 
                    <MicroAnswer answer={answer}></MicroAnswer>
                )}
                <div className="topBorder"></div>
                <div className="finalText">
                    {"Исходя из вышеперечисленных ответов вам подойдёт: " + answer.text}
                </div>
                <div className="finalText">
                    {answer.answers[0].text}
                </div>
                <Images id={Number(answer.picId) - 1}></Images>
                
                
            </div>
            )
}