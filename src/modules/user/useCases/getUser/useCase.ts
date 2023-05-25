import { UserRepository } from "modules/user/userRepository";

export class GetUserUseCase {
    constructor(private userRepo: UserRepository) {
        this.userRepo = userRepo;
    }
    async execute(id: number) {
        const user = await this.userRepo.getUserById(id);
        return user;
    }
}