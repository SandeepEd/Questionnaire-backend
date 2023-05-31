import { IUserResponse } from 'types';

export interface IQuestionnaireRepo {
  getQuestions(userId: number): Promise<any>;
  postResponse(userResponse: Omit<IUserResponse, 'id'>): Promise<any>;
}
