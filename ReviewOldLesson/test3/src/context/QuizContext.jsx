export const QuizContext = createContext()

    // trang thai khi moi vao game
    const initialState = {
        index: 0, //dang o cau dau tien
        selected: null, //chua chon dap an nao
        score: 0, // chua co diem
        showAnswer: false, // chua hien dap an (chua bam chon)
        finished: false // chua hoan thanh (dang lam)
    }

    function quizRender(state, action) {
        switch (action.type) {
            case 'NEXT_QUESTION':
                const isCorrect = questions[state.index].answer === action.payload
                return {
                    ...state,
                    index: state.index + 1,
                    selected: action.payload,
                    score: isCorrect ? state.score + 1 : state.score,
                    showAnswer: true
                }
        }
    }