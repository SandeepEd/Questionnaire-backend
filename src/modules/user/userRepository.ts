import { IUser, IUserRepo } from "./IUserRepo";
import * as Models from "../../database/sequelize/models"

export class UserRepository implements IUserRepo {
    constructor(private models: typeof Models) { }

    public createUser(user: IUser) {
        const { UserModel } = this.models;
        const createdUser = UserModel.create(user);
        return createdUser;
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        const { UserModel } = this.models;
        const user = await UserModel.findOne({ where: { email } });
        return user;
    }

    async getUserById(id: number): Promise<IUser | null> {
        const { UserModel } = this.models;
        const user = await UserModel.findByPk(id);
        return user;
    }
}