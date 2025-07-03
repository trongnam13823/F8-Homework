import { ACTIONS } from "../constants/actions";
import questions from "../data/questions";
import { useQuiz } from "../hooks/useQuiz";
import AnswerOption from "./AnswerOption";
import ProgressBar from "./ProgressBar";

export default function Question() {
    const { state, dispatch } = useQuiz();
    const currentQ = questions[state.currentQuestion];

    const handleAnswerSelect = (answer) => {
        if (state.isAnswered) return;
        dispatch({ type: ACTIONS.SELECT_ANSWER, payload: answer });
    };

    const handleNextQuestion = () => {
        dispatch({ type: ACTIONS.NEXT_QUESTION });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <ProgressBar current={state.currentQuestion} total={questions.length} />

            <h2 className="text-xl font-bold mb-6 text-gray-800">{currentQ.question}</h2>

            <div className="space-y-3 mb-6">
                {currentQ.options.map((option, index) => (
                    <AnswerOption
                        key={index}
                        option={option}
                        index={index}
                        isAnswered={state.isAnswered}
                        showResult={state.showResult}
                        correctAnswer={currentQ.answer}
                        selectedAnswer={state.selectedAnswer}
                        onSelect={handleAnswerSelect}
                    />
                ))}
            </div>

            <div className="text-center">
                <button
                    disabled={!state.showResult}
                    onClick={handleNextQuestion}
                    className={`mb-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium w-full ${
                        state.showResult ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed"
                    }`}
                >
                    {state.currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                </button>
            </div>
        </div>
    );
}
