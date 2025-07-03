import { ACTIONS } from "../constants/actions";
import questions from "../data/questions";

export const initialState = {
    currentQuestion: 0,
    selectedAnswer: null,
    showResult: false,
    score: 0,
    isAnswered: false,
    quizCompleted: false,
};

export function quizReducer(state, action) {
    switch (action.type) {
        case ACTIONS.SELECT_ANSWER: {
            const isCorrect = action.payload === questions[state.currentQuestion].answer;
            return {
                ...state,
                selectedAnswer: action.payload,
                showResult: true,
                score: isCorrect ? state.score + 1 : state.score,
                isAnswered: true,
            };
        }

        case ACTIONS.NEXT_QUESTION: {
            const nextQuestion = state.currentQuestion + 1;
            return {
                ...state,
                currentQuestion: nextQuestion,
                selectedAnswer: null,
                showResult: false,
                isAnswered: false,
                quizCompleted: nextQuestion >= questions.length,
            };
        }

        case ACTIONS.RESTART_QUIZ:
            return initialState;

        default:
            return state;
    }
}
