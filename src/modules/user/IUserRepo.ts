export interface IUserRepo {
    createUser(user: Pick<IUser, 'email' | 'password'>): Promise<IUser>;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}