import { NextFunction } from "express";
import { authServices } from "../services";
import { SessionManager } from "../services/SessionManager";

export const ManageRoute = (req: any, res: any, next: NextFunction) => {
    try {
        const token = SessionManager.checkSession(req, res);
        const user = authServices.decodeUserToken(token);
        req.user = user;
        next()
    } catch (error) {
        next(error)
    }
}