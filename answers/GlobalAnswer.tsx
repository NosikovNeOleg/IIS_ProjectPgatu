import { IViewMain } from "@/components/IViewMain";
import { MicroAnswer } from "./MicroAnswer";


interface GlobalAnswerProps {
    answers: IViewMain[]
}

export function GlobalAnswer({answers}: GlobalAnswerProps){

    

    return (
            <div>
                <div className="text-center text-2xl font-mono">{"Итог"}</div>
                <div className="topBorder"></div>
                {
                answers?.map(answer => 
                    <MicroAnswer answer={answer}></MicroAnswer>
                )}
            </div>
            )
}