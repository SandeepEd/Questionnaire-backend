import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

interface IUserToken {
  id: number;
  name: string;
  email: string;
}

export interface IAuthServices {
  generateUserToken(user: IUserToken): string;
  decodeUserToken(token: string): IUserToken;
  hashPassword(password: string): Promise<string>;
  compare(userPassword: string, hashedPassword: string): Promise<boolean>;
}

export class AuthServices implements IAuthServices {

  public generateUserToken(user: IUserToken) {
    return jwt.sign(user, `userDetails`, { expiresIn: `1h` });
  }

  public decodeUserToken(token: string): any {
    try {
      return jwt.verify(token, `userDetails`);
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      throw new Error(error.message);
    }
  }

  public hashPassword(password: string) {
    return hash(password, 12);
  }

  public compare(userPassword: string, hashedPassword: string) {
    return compare(userPassword, hashedPassword);
  }
}

export const authServices = new AuthServices();
