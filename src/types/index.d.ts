export interface IQuestions {
  id: number;
  question_text: string;
  correct_option_id: number;
}

export interface IOptions {
  id: number;
  option_text: string;
}

export interface IAssignment {
  id: number;
  question_id: number;
  option_id: number;
  user_id: number;
  response_id: number;
}

export interface IUserResponse {
  id: number;
  user_id: number;
  question_id: number;
  response_id: number;
}

export interface IQuestion {
  id: number;
  question_text: string;
  response_id: number | null;
  correct_option_id?: number;
  isCorrect?: boolean;
  options: IOption[];
}
