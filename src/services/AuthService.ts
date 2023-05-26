import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";

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
    constructor() { }

    public generateUserToken(user: IUserToken) {
        return jwt.sign(user, `userDetails`, { expiresIn: '1h' });
    }

    public decodeUserToken(token: string): any {
        return jwt.verify(token, `userDetails`);
    }

    public hashPassword(password: string) {
        return hash(password, 12);
    }

    public compare(userPassword: string, hashedPassword: string) {
        return compare(userPassword, hashedPassword);
    }
}

export const authServices = new AuthServices();