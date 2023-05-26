import { authServices } from "../../../services";
import { userRepo } from "../../user";
import { SignUpController } from "./controller";
import { SignUpUseCase } from "./useCase";


const signUpUseCase = new SignUpUseCase(authServices, userRepo);
const signUpController = new SignUpController(signUpUseCase);

export { signUpController }