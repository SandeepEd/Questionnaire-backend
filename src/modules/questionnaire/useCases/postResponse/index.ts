import { questionnaireRepo } from "../../../../modules/questionnaire";
import { PostResponseUseCase } from "./useCase";
import { PostResponseController } from "./controller";
import { userRepo } from "../../../../modules/user";

const postResponseUseCase = new PostResponseUseCase(questionnaireRepo, userRepo);
const postResponseController = new PostResponseController(postResponseUseCase);

export { postResponseController }