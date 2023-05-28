import { userRepo } from "../../../../modules/user";
import { questionnaireRepo } from "../../../../modules/questionnaire";
import { GetQuestionsController } from "./controller";
import { GetQuestionsUseCase } from "./useCase";

const getQuestionsUseCase = new GetQuestionsUseCase(questionnaireRepo, userRepo);
const getQuestionsController = new GetQuestionsController(getQuestionsUseCase);

export { getQuestionsController }