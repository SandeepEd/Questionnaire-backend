import { UserRepository } from "./userRepository";
import * as models from "../../database/sequelize/models";

const userRepo = new UserRepository(models);

export { userRepo }