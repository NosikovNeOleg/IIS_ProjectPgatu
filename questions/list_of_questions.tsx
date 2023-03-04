import { IViewMain } from "@/components/IViewMain";

export const questions: IViewMain[] = [
    

    {
        id: 1,
        code: "FIRST",
        text: "Специфика проекта",
        answers: [
            {a_id : 1, text : "Государственный проект"},
            {a_id : 2, text : "Продуктовый проект"},
            {a_id : 2, text : "Учебный проект"}
        ]
    },
    {
        id: 11,
        code: "SECOND",
        text: "Секретность проекта",
        answers: [
            {a_id : 1, text : "Засекреченный"},
            {a_id : 2, text : "Открытый"},
            
        ]
    },
    {
        id: 111,
        code: "SECOND",
        text: "Программирование на уровне системы?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},   
        ]
    },

    {
        id: 12,
        code: "Платформа проекта",
        text: "",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
]