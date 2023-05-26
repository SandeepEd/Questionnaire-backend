import { IOptions, IQuestionOption, IQuestions, IUserResponse } from "types";

export interface IQuestionnaireRepo {
    getQuestions(): Promise<IQuestions[]>;
    getOptions(): Promise<IOptions[]>;
    getQuestionOptions(): Promise<IQuestionOption[]>;
    getUserResponses(): Promise<IUserResponse[]>;
    createUserResponse(userResponse: IUserResponse): Promise<IUserResponse>;
}