import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

export const handleErrors = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }
    const status = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({ message, status });
}