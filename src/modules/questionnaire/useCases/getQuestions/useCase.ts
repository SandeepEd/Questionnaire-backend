import { QuestionnaireRepo } from "../../../../modules/questionnaire/questionnaireRepo";

export class GetQuestionsUseCase {
    constructor(private questionnaireRepo: QuestionnaireRepo) {}
    async execute() {
        const questions = await this.questionnaireRepo.getQuestions();
        return questions;
    }
}