import { questionnaireRepo } from "../../../../modules/questionnaire";
import { PostResponseUseCase } from "./useCase";
import { PostResponseController } from "./controller";

const postResponseUseCase = new PostResponseUseCase(questionnaireRepo);
const postResponseController = new PostResponseController(postResponseUseCase);

export { postResponseController }