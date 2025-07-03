export default function ProgressBar({ current, total }) {
    const percentage = Math.round(((current + 1) / total) * 100);

    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">
                    Câu {current + 1}/{total}
                </span>
                <span className="text-sm font-medium text-gray-500">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
