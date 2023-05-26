import express from "express";
import { userRouter } from "./modules/user/routes";
import { questionnaireRoute } from "./modules/questionnaire/routes";
import { logInRouter, signUpRouter } from "./modules/auth/routes";

const router = express.Router();
router.use('/user', userRouter)
router.use(`/questionnaire`, questionnaireRoute)
router.use(`/login`, logInRouter)
router.use(`/signup`, signUpRouter)

export { router }