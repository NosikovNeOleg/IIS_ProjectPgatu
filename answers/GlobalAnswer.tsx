import { IViewMain } from "@/components/IViewMain";
import { Radio } from '@nextui-org/react';


interface GlobalAnswerProps {
    answer: IViewMain
}

export function GlobalAnswer({answer}: GlobalAnswerProps){

    return (
            <div>
                <div className="text-center text-2xl font-mono">{answer?.text}</div>
                <div className="topBorder"></div>
                <div className="absolute top-50 text-center text-xl font-mono">{answer.answer}</div>
            </div>
            )
}