import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../../../shared/BaseController';
import { SessionManager } from '../../../services/SessionManager';
import { LogInUseCase } from './useCase';

export class LogInController extends BaseController {
  constructor(private logInUseCase: LogInUseCase) {
    super();
  }

  async handleController(req: Request, res: Response, next: NextFunction) {
    const logInDto = req.body as { email: string, password: string };
    try {
      const result = await this.logInUseCase.execute(logInDto);
      delete result.user.password;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      SessionManager.setSession(req, result.token);
      res.cookie(`spa_token`, true);
      this.handleResponse(req, res, result.user);

    } catch (error: any) {
      next(error);
    }
  }
}
