export interface IQuestions {
    id: number;
    question_text: string;
    correct_option_id: number;
}

export interface IOptions {
    id: number;
    option_text: string;
}

export interface IQuestionOption {
    id: number;
    question_id: number;
    option_id: number;
}

export interface IUserResponse {
    id: number;
    user_id: number;
    question_id: number;
    option_id: number;
}