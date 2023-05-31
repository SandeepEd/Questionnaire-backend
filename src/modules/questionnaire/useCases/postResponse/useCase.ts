import { QuestionnaireRepo } from '../../../../modules/questionnaire/questionnaireRepo';
import { UserRepository } from '../../../../modules/user/userRepository';

export class PostResponseUseCase {
  constructor(private questionnaireRepo: QuestionnaireRepo, private userRepo: UserRepository) {}
  async execute({ user_id, question_id, response_id, is_submitting }:
  { user_id: number, question_id: number, response_id: number, is_submitting: boolean }) {

    const user = await this.userRepo.getUserById(user_id);
    if (user?.assignment_submitted) {
      throw new Error(`Assignment already submitted`);
    }

    const userResponse = await this.questionnaireRepo.postResponse({
      user_id,
      question_id,
      response_id,
    });
    if (is_submitting) {
      await this.userRepo.updateUserSubmission(is_submitting, user_id);
    }
    return userResponse;
  }
}
