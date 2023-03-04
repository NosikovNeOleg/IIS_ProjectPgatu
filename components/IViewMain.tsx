export interface IViewMain {
    id: number
    code: string
    text: string
    answers: {
        a_id: number,
        text :string
    }[];
}