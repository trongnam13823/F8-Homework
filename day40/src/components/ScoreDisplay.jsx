export default function ScoreDisplay({ score, total }) {
    const percentage = Math.round((score / total) * 100);

    const getResultMessage = () => {
        if (percentage >= 80) return "🏆 Xuất sắc!";
        if (percentage >= 60) return "👍 Khá tốt!";
        if (percentage >= 40) return "😊 Tạm được!";
        return "😞 Cần cố gắng hơn!";
    };

    const getResultColor = () => {
        if (percentage >= 80) return "text-green-600";
        if (percentage >= 60) return "text-blue-600";
        if (percentage >= 40) return "text-yellow-600";
        return "text-red-600";
    };

    const getProgressColor = () => {
        if (percentage >= 80) return "bg-green-500";
        if (percentage >= 60) return "bg-blue-500";
        if (percentage >= 40) return "bg-yellow-500";
        return "bg-red-500";
    };

    return (
        <div className="text-center">
            <div className={`text-6xl font-bold mb-4 ${getResultColor()}`}>
                {score}/{total}
            </div>
            <div className={`text-2xl font-semibold mb-2 ${getResultColor()}`}>{percentage}%</div>
            <p className="text-xl font-medium text-gray-600 mb-6">{getResultMessage()}</p>

            <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                        className={`h-4 rounded-full transition-all duration-500 ${getProgressColor()}`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Điểm số của bạn: {percentage}%</p>
            </div>
        </div>
    );
}
