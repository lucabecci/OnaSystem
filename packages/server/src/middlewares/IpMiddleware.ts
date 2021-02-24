import { NextFunction, Request, Response } from "express";
import requestIp from "request-ip";

class IPmiddleware {
    public static initialize(
        req: Request,
        _res: Response,
        next: NextFunction
    ): void {
        const clientIp = requestIp.getClientIp(req);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        clientIp as any;
        console.log(clientIp);
        next();
    }
}

export default IPmiddleware;
