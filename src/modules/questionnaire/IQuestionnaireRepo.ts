import { IOptions, IAssignment, IQuestions, IUserResponse } from "types";

export interface IQuestionnaireRepo {
    getQuestions(userId: number): Promise<any>;
    getOptions(): Promise<IOptions[]>;
    getQuestionOptions(): Promise<IAssignment[]>;
    getUserResponses(): Promise<IUserResponse[]>;
    createUserResponse(userResponse: IUserResponse): Promise<IUserResponse>;
}