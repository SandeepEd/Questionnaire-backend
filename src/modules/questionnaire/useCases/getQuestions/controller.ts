import { NextFunction, Request, Response } from "express";
import { BaseController } from "../../../../shared/BaseController";
import { GetQuestionsUseCase } from "./useCase";

export class GetQuestionsController extends BaseController {
    constructor(private useCase: GetQuestionsUseCase) {
        super();
    }
    
    async handleController(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const result = await this.useCase.execute();
            this.handleResponse(req, res, result);
        } catch (err) {
        return next(err)
        }
    }
}