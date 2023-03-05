import { IViewMain } from "@/components/IViewMain";

export const questions: IViewMain[] = [
    

    {
        id: 1,
        code: "SPEC",
        text: "Специфика проекта",
        answers: [
            {a_id : 1, text : "Государственный проект"},
            {a_id : 2, text : "Продуктовый проект"},
            {a_id : 3, text : "Учебный проект"}
        ]
    },
    {
        id: 11,
        code: "SECRET",
        text: "Секретность проекта",
        answers: [
            {a_id : 1, text : "Засекреченный"},
            {a_id : 2, text : "Открытый"},
            
        ]
    },
    {
        id: 111,
        code: "SYSPROG",
        text: "Программирование на уровне системы?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},   
        ]
    },
    {
        id: 112,
        code: "FORPO",
        text: "Разрешено использование зарубежного ПО?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},   
        ]
    },
    {
        id: 1121,
        code: "PAYFORPO",
        text: "Есть возможность оплатить зарубежное ПО?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},   
        ]
    },
    {
        id: 11212,
        code: "NEEDUI",
        text: "Необходим пользовательский интерфейс?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},   
        ]
    },
    {
        id: 11211,
        code: "ISWEB",
        text: "Веб-проект?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},   
        ]
    },

    {
        id: 12,
        code: "PLAT",
        text: "Платформа проекта",
        answers: [
            {a_id : 1, text : "Веб-приложение"},
            {a_id : 2, text : "Linux"},
            {a_id : 3, text : "MacOs"},
            {a_id : 4, text : "Мобильные устройства"},
            {a_id : 5, text : "Windows"},
        ]
    },
    {
        id: 121,
        code: "SPEED",
        text: "Скорость приложения в приоритете?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 1211,
        code: "NEEDTHR",
        text: "Необходимо многопоточное программирование?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 12111,
        code: "RDYFPAY",
        text: "Готовы платить за IDE?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 12112,
        code: "RDYFPAY",
        text: "Готовы платить за IDE?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 1212,
        code: "BIGDATA",
        text: "Планируется работа с большим объемом данных?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 12122,
        code: "CUTBF",
        text: "Необходимо разделить работу бекенда и фронтенда",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 122,
        code: "SYSPROG",
        text: "Программирование на уровне системы?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 1222,
        code: "NEEDUI",
        text: "Необходим пользовательский интерфейс",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },

    {
        id: 124,
        code: "MOBILE",
        text: "Мобильная платформа",
        answers: [
            {a_id : 1, text : "IOS"},
            {a_id : 2, text : "Android"},
        ]
    },
    {
        id: 1242,
        code: "RDYFNEW",
        text: "Готовы к новому?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 125,
        code: "NEEDUI",
        text: "Необходим пользовательский интерфейс?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 1251,
        code: "NEEDBD",
        text: "Необходима база данных?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 12511,
        code: "SCTR",
        text: "Есть подробная структура данных?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 1252,
        code: "ARCH",
        text: "Архитектура проекта",
        answers: [
            {a_id : 1, text : "Монолит"},
            {a_id : 2, text : "Микросервисы"},
        ]
    },
    {
        id: 12521,
        code: "NEEDBD",
        text: "Необходима база данных",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 125211,
        code: "SCTR",
        text: "Есть подробная структура данных?",
        answers: [
            {a_id : 1, text : "Да"},
            {a_id : 2, text : "Нет"},
        ]
    },
    {
        id: 12522,
        code: "TALK",
        text: "Общение между микросервисами",
        answers: [
            {a_id : 1, text : "Стриминг"},
            {a_id : 2, text : "Синхронное"},
            {a_id : 3, text : "Месседжинг"},
        ]
    },

    {   
        id: 13,
        code: "UPOR",
        text: "На что необходим упор",
        answers: [
            {a_id : 1, text : "Фронтенд"},
            {a_id : 2, text : "Бекенд"},
            {a_id : 3, text : "Фуллстек"},
        ]
    },
    { 
        id: 132,
        code: "DRCT",
        text: "Направление",
        answers: [
            {a_id : 1, text : "Проектирование системы"},
            {a_id : 2, text : "Микросервисы"},
            {a_id : 3, text : "Работа с данными"},
        ]
    },
    
]