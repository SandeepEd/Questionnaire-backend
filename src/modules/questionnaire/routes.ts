import { Router } from "express";
import { getQuestionsController } from "./useCases/getQuestions";

const questionnaireRoute = Router();

questionnaireRoute.get(`/questions`, getQuestionsController.handleController);

export { questionnaireRoute }