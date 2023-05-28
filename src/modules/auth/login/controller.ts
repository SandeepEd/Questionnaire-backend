import { NextFunction, Response } from "express";
import { BaseController } from "../../../shared/BaseController";
import { LogInUseCase } from "./useCase";
import { SessionManager } from "../../../services/SessionManager";

export class LogInController extends BaseController {
    constructor(private logInUseCase: LogInUseCase) {
        super();
    }

    async handleController(req: any, res: Response, next: NextFunction) {
        const logInDto = req.body as { email: string, password: string };
        try {
            const result = await this.logInUseCase.execute(logInDto, req);
            delete result.user.password;
            SessionManager.setSession(req, result.token);
            res.cookie(`spa_token`, true);
            this.handleResponse(req, res, result.user);

        } catch (error: any) {
            next(error);
        }
    }
}