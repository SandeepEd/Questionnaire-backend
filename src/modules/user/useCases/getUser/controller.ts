import { NextFunction } from "express";
import { BaseController } from "../../../../shared/BaseController";
import { GetUserUseCase } from "./useCase";
import { Response } from "express-serve-static-core";

export class GetUserController extends BaseController {
  constructor(public getUserUseCase: GetUserUseCase) {
    super();
  }

  public async handleController(
    req: any,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = await this.getUserUseCase.execute(1);
      this.handleResponse(req, res, user);
    } catch (err) {
      next(err);
    }
  }
}
