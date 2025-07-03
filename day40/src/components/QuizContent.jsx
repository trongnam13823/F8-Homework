import { useQuiz } from "../hooks/useQuiz";
import Question from "./Question";
import Result from "./Result";

export default function QuizContent() {
    const { state } = useQuiz();

    if (state.quizCompleted) {
        return <Result />;
    }

    return <Question />;
}
