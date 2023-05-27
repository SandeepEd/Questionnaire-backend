import { QuestionnaireRepo } from "../../../../modules/questionnaire/questionnaireRepo";

export class GetQuestionsUseCase {
    constructor(private questionnaireRepo: QuestionnaireRepo) {}
    async execute(userId: number) {
        const questions = await this.questionnaireRepo.getQuestions(userId);
        return questions;
    }
}