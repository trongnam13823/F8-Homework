// Enum định nghĩa các loại câu hỏi
export enum QuestionTypeE {
    MULTIPLE_CHOICE = "multiple_choice",
}

// Kiểu cho một câu hỏi trắc nghiệm
export interface QuestionI {
    id?: number;
    type: QuestionTypeE;
    question: string;
    description?: string;
    answer?: string;
    isReview?: boolean;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
}

// Chi tiết bài thi
export interface ExamDetailI {
    id?: number;
    module: number;
    section: number;
    question: QuestionI;
}

// Đề thi tổng thể
export interface ExamI {
    id?: string;
    title: string;
    description?: string;
    details: ExamDetailI[];
}
