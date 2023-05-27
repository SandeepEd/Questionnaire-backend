import * as Models from "../../database/sequelize/models";
import { IQuestionnaireRepo } from "./IQuestionnaireRepo";

export class QuestionnaireRepo implements IQuestionnaireRepo {
  constructor(private models: typeof Models) {}

  async getQuestions(userId: number) {
    const assignments: any = await this.models.AssignmentModel.findAll({
      where: { user_id: userId },
      include: [
        {
          model: this.models.QuestionsModel,
          as: "question",
          attributes: ["id", "question_text"],
        },
        {
          model: this.models.OptionsModel,
          as: "option",
          attributes: ["id", "option_text"],
        },
      ],
    });
    const questionsMap = new Map();

    for (const assignment of assignments) {
      const questionId = assignment.question.id;
      const questionText = assignment.question.question_text;
      const optionId = assignment.option.id;
      const optionText = assignment.option.option_text;

      if (questionsMap.has(questionId)) {
        questionsMap.get(questionId).options.push({
          id: optionId,
          option_text: optionText,
        });
      } else {
        questionsMap.set(questionId, {
          question_text: questionText,
          response_id: assignment.response_id,
          options: [
            {
              id: optionId,
              option_text: optionText,
            },
          ],
        });
      }
    }

    // Convert Map to Array
    const result: any = [];
    for (const [questionId, value] of questionsMap.entries()) {
      result.push({
        id: questionId,
        response_id: value.response_id,
        question_text: value.question_text,
        options: value.options,
      });
    }

    return result;
  }

  async getOptions() {
    return await this.models.OptionsModel.findAll();
  }

  async getQuestionOptions() {
    return await this.models.AssignmentModel.findAll();
  }

  async getUserResponses() {
    return await this.models.UserResponses.findAll();
  }

  async createUserResponse(userResponse: any) {
    return await this.models.UserResponses.create(userResponse);
  }
}
