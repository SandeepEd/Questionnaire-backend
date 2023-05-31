/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextFunction, Response } from 'express';
import { BaseController } from '../../../../shared/BaseController';
import { GetQuestionsUseCase } from './useCase';

export class GetQuestionsController extends BaseController {
  constructor(private useCase: GetQuestionsUseCase) {
    super();
  }

  async handleController(req: any, res: Response, next: NextFunction): Promise<any> {
    try {
      const result = await this.useCase.execute(req.user.id);
      this.handleResponse(req, res, result);
    } catch (err) {
      return next(err);
    }
  }
}
