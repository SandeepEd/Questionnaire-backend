import { NextFunction, Request, Response } from "express";
import { BaseController } from "../../../shared/BaseController";
import { IUser } from "../../user/IUserRepo";
import { SignUpUseCase } from "./useCase";

export class SignUpController extends BaseController {
    constructor(private signUpUseCase: SignUpUseCase) {
        super();
    }

    async handleController(req: Request, res: Response, next: NextFunction) {
        const user = req.body as IUser;
        try {
            const result = await this.signUpUseCase.execute(user);
            this.handleResponse(req, res, result)
        } catch (error: any) {
            next(error);
        }
    }
}