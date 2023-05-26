import { authServices } from "../../../services";
import { userRepo } from "../../user";
import { LogInController } from "./controller";
import { LogInUseCase } from "./useCase";

const logInUseCase = new LogInUseCase(authServices, userRepo);
const logInController = new LogInController(logInUseCase);

export { logInController }