export enum QuestionType {
    MULTIPLE_CHOICE = 'multiple-choice',
    SHORT_ANSWER = 'short-answer',
}

export interface PathI {
    section: number
    module: number
}

export interface QuestionI {
    id: number
    code?: string
    description?: string
    question: string
    type: QuestionType
    optionA?: string
    optionB?: string
    optionC?: string
    optionD?: string
    correctAnswer?: string
    explanation?: string
}

export interface ExamDetailI {
    id: number
    section: string
    module: string
    question: QuestionI
}

export interface ExamI {
    id: number | undefined
    title: string
    description: string
    details: Array<ExamDetailI>
}