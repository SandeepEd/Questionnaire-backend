export interface IUserRepo {
    createUser(user: Pick<IUser, 'email' | 'password'>): Promise<IUser>;
    updateUserSubmission(assignment_submitted: boolean, user_id: number): Promise<any>;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    assignment_submitted: boolean;
}