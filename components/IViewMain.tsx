export interface IViewMain {
    id: number
    code: string
    text: string
    picId : string
    answers: {
        a_id: number,
        text :string
    }[];
}