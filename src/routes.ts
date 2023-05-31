import express from 'express';
import { userRouter } from './modules/user/routes';
import { questionnaireRoute } from './modules/questionnaire/routes';
import { logInRouter, signUpRouter } from './modules/auth/routes';
import { ProtectedRoute } from './utils/ManageRoute';

const router = express.Router();
router.use(`/user`, ProtectedRoute, userRouter);
router.use(`/questionnaire`, ProtectedRoute, questionnaireRoute);
router.use(`/login`, logInRouter);
router.use(`/signup`, signUpRouter);

export { router };
