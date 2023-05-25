import { NextFunction, Request, Response } from "express";

export abstract class BaseController {
    constructor() {
        this.handleController = this.handleController.bind(this);
    }

    public abstract handleController(req: Request, res: Response, next: NextFunction): Promise<void | any>;


    public handleResponse(req: any, res: any, data: any) {
        res.status(200).json(data);
    }
}