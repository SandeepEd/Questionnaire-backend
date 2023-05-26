import { QuestionnaireRepo } from "./questionnaireRepo";
import * as Models from '../../database/sequelize/models';

const questionnaireRepo = new QuestionnaireRepo(Models);

export { questionnaireRepo }