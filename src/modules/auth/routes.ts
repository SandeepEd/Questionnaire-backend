import { Router } from "express";
import { signUpController } from "./signup";
import { logInController } from "./login";

const signUpRouter = Router();
const logInRouter = Router();

signUpRouter.post('/', signUpController.handleController);

logInRouter.post('/', logInController.handleController);

export { signUpRouter, logInRouter }