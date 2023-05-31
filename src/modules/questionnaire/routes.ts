import { Router } from 'express';
import { getQuestionsController } from './useCases/getQuestions';
import { postResponseController } from './useCases/postResponse';

const questionnaireRoute = Router();

questionnaireRoute.get(`/questions`, getQuestionsController.handleController);
questionnaireRoute.post(`/response`, postResponseController.handleController);

export { questionnaireRoute };
