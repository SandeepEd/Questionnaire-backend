import { QuestionnaireRepo } from "modules/questionnaire/questionnaireRepo";

export class PostResponseUseCase {
  constructor(private questionnaireRepo: QuestionnaireRepo) {}
  async execute({ user_id, question_id, response_id }) {
    const userResponse = await this.questionnaireRepo.postResponse({
      user_id,
      question_id,
      response_id,
    });
    return userResponse;
  }
}
