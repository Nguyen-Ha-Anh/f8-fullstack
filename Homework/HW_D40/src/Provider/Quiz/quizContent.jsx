import { createContext } from "react";
import { questions } from "./question";
import { useReducer } from "react";

export const QuizContext = createContext();

const initialState = {
    index: 0,
    selected: null,
    score: 0,
    showAnswer: false,
    finished: false
}

function quizRender(state, action) {
    switch (action.type) {
        case 'SELECT_OPTION': {
            const isCorrect =  questions[state.index].answer === action.payload;
            return {
                ...state,
                selected: action.payload,
                score: isCorrect ? state.score + 1 : state.score,
                showAnswer: true
            }
        }
        case 'NEXT': {
            const isLast = state.index === questions.length - 1;
            return isLast
                ? { ...state, finished: true }
                : { ...state, index: state.index + 1, selected: null, showAnswer: false };
        }
        case 'RESTART': {
            return initialState;
        }
    }
}

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizRender, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}
