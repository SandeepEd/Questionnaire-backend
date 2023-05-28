import { UserRepository } from "modules/user/userRepository";
import { QuestionnaireRepo } from "../../../../modules/questionnaire/questionnaireRepo";

export class GetQuestionsUseCase {
    constructor(private questionnaireRepo: QuestionnaireRepo, private userRepo: UserRepository) {}
    async execute(userId: number) {
        let questions = await this.questionnaireRepo.getQuestions(userId);
        const user = await this.userRepo.getUserById(userId);

        if(user) {
            questions = questions.map((question) => {
                if(question.response_id === question.correct_option_id) {
                    question.isCorrect = true;
                }
                delete question.correct_option_id;
                return question;
            });
        }
        return questions;
    }
}