import { IAuthServices } from "../../../services";
import { IUser, IUserRepo } from "../../user/IUserRepo";

export class SignUpUseCase {
    constructor(private authServices: IAuthServices, private userRepo: IUserRepo) {
    }

    async execute(user: IUser) {
        const { password } = user;
        const hashedPassword = await this.authServices.hashPassword(password);
        const createdUser = await this.userRepo.createUser({ ...user, password: hashedPassword });
        return createdUser;
    }
}