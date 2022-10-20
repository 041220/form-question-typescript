export interface QuestionList {
    title: string,
    description: string,
    questions?: Questions[] | undefined
}
export interface Questions {
    id: string,
    name: string,
    type: string,
    options?: Options[] | undefined,
    index: number,
}
export interface Options {
    key: string,
    name: string
}
export type ListAnswer = {
    id: string,
    answer: string,
}




export interface IProps {
    editId: string | undefined,
    setEditId: (value: string | undefined) => void,
    question: any
}
export interface InProgressProps {
    questions: any,
    listAnswer: ListAnswer[],
    setListAnswer: any,
    index: number,
}


