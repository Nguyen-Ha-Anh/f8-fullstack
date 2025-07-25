import { createContext } from "react";
import { questions } from "./question";
import { useContext } from "react";

const quizContent = createContext()

const initialState = {
    index: 0,
    selected: null,
    score: 0,
    showAnswer: false,
    finished: false
}

const actions = {
    SELECT_OPTION: (state, action) => {
        const isCorrect = questions[state.index].answer === action.payload
        return {
            ...state,
            selected: action.payload,
            score: isCorrect ? state.score + 1 : state.score,
            showAnswer: true
        }
    },

    NEXT: (state) => {
        const isLast = state.index === questions.length -1
        return isLast 
        ? {...state, finished: true} 
        : {
            ...state,
            index: state.index + 1,
            selected: null,
            showAnswer: false
        }
    },

    RESTART: () => initialState 
}

function quizReducer(state, action) {
    const handler = actions[action.type]
    return handler ? handler(state, action) : state
}

export const useQuiz = createContext()