import { IViewMain } from "@/components/IViewMain";
import { Radio } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react'


interface QuestionProps {
    question: IViewMain
}

declare global {
    var checked : string;
    var checkedId : number;
} 


export function Question({question}: QuestionProps){

    const [check, setCheck] = useState(String)
    
    useEffect( () => {
        if (check != "0"){
        global.checkedId = Number(check);
        global.checked = question?.answers?.[Number(check) - 1]?.text;
        }
    }, [check]
    )

    useEffect( () => {
        setCheck("0")
        global.checkedId = 0;
        global.checked = "0";
    }, [question])
    
    return (
            <div>
                <div className="text-center text-2xl font-mono question">{question?.text}</div>
                <div className="topBorder"></div>
                  <Radio.Group
                 
                    value={check}
                    onChange={setCheck} 
                    id="radios">
                      {question?.answers?.map(answers => <Radio className="radios" 
                      value={answers.a_id.toString()}
                      isSquared
                      >{answers.text}</Radio>)}
                </Radio.Group>
                <div></div>
            </div>
    )
}
