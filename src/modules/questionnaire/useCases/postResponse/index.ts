import { questionnaireRepo } from '../../../../modules/questionnaire';
import { userRepo } from '../../../../modules/user';
import { PostResponseUseCase } from './useCase';
import { PostResponseController } from './controller';

const postResponseUseCase = new PostResponseUseCase(questionnaireRepo, userRepo);
const postResponseController = new PostResponseController(postResponseUseCase);

export { postResponseController };
