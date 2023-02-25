import { IViewMain } from "@/components/IViewMain";
import { Radio } from '@nextui-org/react';


interface QuestionProps {
    question: IViewMain
}

export function Question({question}: QuestionProps){


    return (
            <div>
                <div className="text-center text-2xl font-mono">{question?.text}</div>
                <div className="topBorder"></div>
                  <Radio.Group>
                      {question?.answers?.map(answers => <Radio className="radios" value={answers}>{answers}</Radio>)}
                </Radio.Group>
            </div>
    )
}