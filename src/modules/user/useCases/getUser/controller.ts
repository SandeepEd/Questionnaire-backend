import { NextFunction } from "express";
import { BaseController } from "../../../../shared/BaseController";
import { GetUserUseCase } from "./useCase";

export class GetUserController extends BaseController {
    constructor(public getUserUseCase: GetUserUseCase) {
        super();
    }

    public async handleController(req: any, res: any, next: NextFunction): Promise<any> {
        try{
            const user = await this.getUserUseCase.execute(req.user.id);
        this.handleResponse(req, res, user);
        } catch (error) {
            next(error)
        }
    }
}