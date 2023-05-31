import { Response } from 'express';
import { PreconditionFailed } from 'http-errors';
export class SessionManager {
  static setSession(req: any, token: string) {
    if (!req.session) {
      throw new PreconditionFailed(`Invalid or no session`);
    }
    req.session.token = token;
  }

  static clearSession(req: any) {
    delete req.session?.token;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    req.session.destroy((err: any) => {
      if (err) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        throw new Error(err);
      }
    });
  }

  static checkSession(req: any, res: Response) {
    if (!req.session || !req.session.token) {
      res.clearCookie(`spa_token`);
      throw new PreconditionFailed(`Invalid or no session`);
    }
    return req.session.token;
  }

}
