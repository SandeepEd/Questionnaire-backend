import { UserRepository } from "../../../../modules/user/userRepository";
import { QuestionnaireRepo } from "../../../../modules/questionnaire/questionnaireRepo";

export class GetQuestionsUseCase {
  constructor(
    private questionnaireRepo: QuestionnaireRepo,
    private userRepo: UserRepository
  ) {}
  async execute(userId: number) {
    let questions = await this.questionnaireRepo.getQuestions(userId);
    const user = await this.userRepo.getUserById(userId);

    questions = questions.map((question) => {
      if (user?.assignment_submitted) {
        question.isCorrect =
          question.response_id === question.correct_option_id;
      }
      delete question.correct_option_id;
      return question;
    });

    return questions;
  }
}
