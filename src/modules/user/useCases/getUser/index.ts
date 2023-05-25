import { userRepo } from "../../../../modules/user";
import { GetUserUseCase } from "./useCase";
import { GetUserController } from "./controller";

const getUserUseCase = new GetUserUseCase(userRepo);
const getUserController = new GetUserController(getUserUseCase);

export { getUserController }