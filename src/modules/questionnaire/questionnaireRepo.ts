import * as Models from '../../database/sequelize/models';
import { IQuestionnaireRepo } from './IQuestionnaireRepo';

export class QuestionnaireRepo implements IQuestionnaireRepo {
    constructor(private models: typeof Models) {}

    async getQuestions() {
        return await this.models.QuestionsModel.findAll({
            include: [{
                model: this.models.OptionsModel,
                as: 'options',
                through: {
                    attributes: [] // Exclude the attributes of the join table from the result
                },
                attributes: ['id', 'option_text'] // Include only the option_text in the result
            }],
            attributes: ['id', 'question_text'] 
        });
    }

    async getOptions() {
        return await this.models.OptionsModel.findAll();
    }

    async getQuestionOptions() {
        return await this.models.QuestionOptionModel.findAll();
    }

    async getUserResponses() {
        return await this.models.UserResponses.findAll();
    }

    async createUserResponse(userResponse: any) {
        return await this.models.UserResponses.create(userResponse);
    }


}