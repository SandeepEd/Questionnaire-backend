import { PreconditionFailed } from "http-errors";
export class SessionManager {
    static setSession(req: any, token: string) {
        req.session.token = token;
    }

    static clearSession(req: any) {
        req.session.destroy((err: any) => {
            if (err) {
                console.log(err);
            }
        });
    }

    static checkSession(req: any, res: any) {
        if (!req.session || !req.session.token) {
            res.cookie(`spa_token`, false);
            throw new PreconditionFailed(`Invalid or no session`);
        }
        return req.session.token;
    }

}