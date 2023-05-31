import * as Models from '../../database/sequelize/models';
import { IUser, IUserRepo } from './IUserRepo';

export class UserRepository implements IUserRepo {
  constructor(private models: typeof Models) { }

  public createUser(user: IUser) {
    const { UserModel } = this.models;
    const createdUser = UserModel.create(user);
    return createdUser;
  }

  public updateUserSubmission(assignment_submitted: boolean, user_id: number) {
    const { UserModel } = this.models;
    const updatedUser = UserModel.update({
      assignment_submitted,
    }, { where: { id: user_id } });
    return updatedUser;
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    const { UserModel } = this.models;
    const user = await UserModel.findOne({ where: { email } });
    if (user) {
      return user.get();
    }
    return null;
  }

  async getUserById(id: number): Promise<IUser | null> {
    const { UserModel } = this.models;
    const user = await UserModel.findByPk(id);
    return user;
  }
}
