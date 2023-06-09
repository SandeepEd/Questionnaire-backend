import { NextFunction, Response } from 'express';
import { BaseController } from '../../../../shared/BaseController';
import { PostResponseUseCase } from './useCase';

export class PostResponseController extends BaseController {
  constructor(private useCase: PostResponseUseCase) {
    super();
  }

  async handleController(
    req: any,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const { question_id, response_id, is_submitting } = req.body;
      const result = await this.useCase.execute({
        question_id,
        response_id,
        user_id: req.user.id,
        is_submitting,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.handleResponse(req, res, result);
    } catch (err) {
      return next(err);
    }
  }
}
