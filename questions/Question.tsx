import { IViewMain } from "@/components/IViewMain";
import { Radio } from '@nextui-org/react';
import { useState } from 'react';
import { Button } from '@nextui-org/react'


interface QuestionProps {
    question: IViewMain
}

declare global {
    var checked : string;
    var checkedId : number;
}

export function Question({question}: QuestionProps){

    const [checked, setChecked] = useState(String);
    const [checkedId, setCheckedId] = useState(Number);
    global.checked = checked
    global.checkedId = checkedId
    
    function setThings(value : string){
        var temp = Number.parseInt(value);
        setChecked(question?.answers[temp - 1].text)
        setCheckedId(temp)
       global.checked = "";
    }
    


    
    return (
            <div>
                <div className="text-center text-2xl font-mono question">{question?.text}</div>
                <div className="topBorder"></div>
                  <Radio.Group onChange={setThings} >
                      {question?.answers?.map(answers => <Radio className="radios" 
                      value={answers.a_id.toString()}
                      label={answers.text}
                      isSquared
                      >{answers.text}</Radio>)}
                </Radio.Group>
            </div>
    )
}
