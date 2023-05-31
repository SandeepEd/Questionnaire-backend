import { NextFunction, Response } from 'express';
import { authServices } from '../services';
import { SessionManager } from '../services/SessionManager';

export const ProtectedRoute = (req: any, res: Response, next: NextFunction) => {
  try {
    const token: string = SessionManager.checkSession(req, res);
    const user = authServices.decodeUserToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
