export default function AnswerOption({
    option,
    index,
    isAnswered,
    showResult,
    correctAnswer,
    selectedAnswer,
    onSelect,
}) {
    const getOptionStyle = () => {
        if (!showResult) {
            return "bg-white border-2 border-gray-300 hover:bg-blue-50 hover:border-blue-300";
        }

        if (option === correctAnswer) {
            return "bg-green-100 border-2 border-green-500 text-green-800";
        } else if (option === selectedAnswer && option !== correctAnswer) {
            return "bg-red-100 border-2 border-red-500 text-red-800";
        } else {
            return "bg-gray-100 border-2 border-gray-300 text-gray-500";
        }
    };

    const getOptionIcon = () => {
        if (!showResult) return null;

        if (option === correctAnswer) {
            return <span className="text-green-600 font-bold">✅</span>;
        } else if (option === selectedAnswer && option !== correctAnswer) {
            return <span className="text-red-600 font-bold">❌</span>;
        }
        return null;
    };

    return (
        <button
            onClick={() => onSelect(option)}
            disabled={isAnswered}
            className={`w-full p-4 text-left rounded-lg transition-all duration-200 flex items-center justify-between ${getOptionStyle()} ${
                isAnswered ? "cursor-not-allowed" : "cursor-pointer"
            }`}
        >
            <span className="font-medium">
                {String.fromCharCode(65 + index)}. {option}
            </span>
            {getOptionIcon()}
        </button>
    );
}
