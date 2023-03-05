import { IViewMain } from "@/components/IViewMain"


interface MicroAnswerProp {
    answer: IViewMain
}

export function MicroAnswer( {answer} : MicroAnswerProp) {
    return (
    <div>
        <div className="microQuestion">
            { "Вопрос "+ (Number(answer.id) + 1) +": "+ answer?.text}
        </div>
    
        <div className="microAnswer">
            {answer?.answers.map(answer => answer.text)}
        </div>



    </div>
    )
}