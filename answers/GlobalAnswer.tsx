import { IViewMain } from "@/components/IViewMain";
import { MicroAnswer } from "./MicroAnswer";
import {expertChoice} from "./expertChoice"
import { Button } from "@nextui-org/react";
import  * as pictures  from "./pictures/*.png";
import Image from 'next/image'


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
    
    const myLoader = ({ }) => {
        return `./pictures/`
      }
    
    var hrefPic = "/pictures/" + answer.picId + ".png";
    hrefPic = "/pictures/1.png";

    const MyImage = () => {
        return (
          <Image
            loader={myLoader}
            src="1.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        )
      }

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
                <Image  src={hrefPic} alt="ЖОПАА" width={1000} height={1000}/>
                <MyImage></MyImage>
                
            </div>
            )
}