import { Router } from "express";
import { getUserController } from "./useCases/getUser";

const userRouter = Router();

userRouter.get('/me', getUserController.handleController);

export { userRouter }