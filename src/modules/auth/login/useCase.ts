import createError from 'http-errors';
import { IAuthServices } from '../../../services';
import { IUser } from '../../user/IUserRepo';
import { UserRepository } from '../../user/userRepository';

export class LogInUseCase {
  constructor(private authServices: IAuthServices, private userRepo: UserRepository) { }
  async execute(data: Pick<IUser, 'email' | 'password'>): Promise<any> {
    const { password, email } = data;
    const user = await this.userRepo.getUserByEmail(email);
    if (!user) {
      throw new Error(`User not present`);
    }

    const isPasswordValid = await this.authServices.compare(password, user.password);

    if (!isPasswordValid) {
      throw new createError.PreconditionFailed(`Invalid password`);
    }
    const token = this.authServices.generateUserToken({
      id: user.id,
      name: user.name,
      email: user.email,
    });
    return { user, token };
  }
}
