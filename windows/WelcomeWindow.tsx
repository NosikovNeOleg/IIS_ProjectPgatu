import { Button} from "@nextui-org/react";
import  Link  from "next/link"


export default function WelcomeWindow() {


    

    const greet1 = "Добро пожаловать в ЭСПВТПИПСДРПП (Экспертная система по выбору технологии и программных средств для разработки программного продукта)!"
    const greet2 = "Вам необходимо ответить на несколько вопросов после чего система сгенерирует оптимальный вариант, который подойдёт под вашу задачу"
    const buttonText = "Начать"
    
    return (
        <div className="welcomeWindow">
            <div className="welcomeText">
                {greet1}
            </div>
            <div className="welcomeText">
                {greet2}
            </div>
            
                
           
                <Button className="answerButton" auto ghost>
                <Link href={"/main"} className="redirect" passHref>
                    {buttonText}
                    </Link>
                </Button>
            
        </div>
            )
            }