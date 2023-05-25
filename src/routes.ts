import express from "express";
import { ManageRoute } from "./utils/ManageRoute";
import { userRouter } from "./modules/user/routes";
console.log(ManageRoute);

const router = express.Router();
router.use('/user', ManageRoute, userRouter)

export { router }