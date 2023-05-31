import * as Models from '../../database/sequelize/models';
import { QuestionnaireRepo } from './questionnaireRepo';

const questionnaireRepo = new QuestionnaireRepo(Models);

export { questionnaireRepo };
