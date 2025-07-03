import { createContext, useReducer } from "react";
import questions from "../data/questions";
import { initialState, quizReducer } from "../reducers/quizReducer";

// eslint-disable-next-line react-refresh/only-export-components
export const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={{ state, dispatch, questions }}>{children}</QuizContext.Provider>;
}
