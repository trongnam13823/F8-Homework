import { ACTIONS } from "../constants/actions";
import questions from "../data/questions";
import ScoreDisplay from "./ScoreDisplay";
import { useQuiz } from "../hooks/useQuiz";

export default function Result() {
    const { state, dispatch } = useQuiz();

    const handleRestart = () => {
        dispatch({ type: ACTIONS.RESTART_QUIZ });
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Kết quả bài thi</h2>

            <ScoreDisplay score={state.score} total={questions.length} />

            <div className="text-center">
                <button
                    onClick={handleRestart}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg cursor-pointer"
                >
                    🔄 Làm lại bài thi
                </button>
            </div>
        </div>
    );
}
