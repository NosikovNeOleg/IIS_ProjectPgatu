import { Button} from "@nextui-org/react";
import  Link  from "next/link"


export default function WelcomeWindow() {


    

    const greet1 = "Добро пожаловать в ЭСПВТПИПСДРПП (Экспертная система по выбору технологии и программных средств для разработки программного продукта)!"
    const greet2 = "Вам необходимо ответить на несколько вопросов после чего система выберет оптимальный вариант, который подойдёт под вашу задачу"
    const buttonText = "Начать"
    
    return (
        <div className="welcomeWindow">
            
            <div className="welcomeText text-center text-2xl">
                {greet1}
            </div>
            <div className="welcomeText text-center text-2">
                {greet2}
            </div>
            
                

                <Button className="answerButton">
                    {buttonText}
                <Link className="redirect" href="/main"/>
                </Button>
                
        </div>
            )
            }