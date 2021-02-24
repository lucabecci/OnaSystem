import { Response, Request } from "express";

class IndexController {
    public getIndex(_req: Request, res: Response): Response {
        return res.status(200).json({
            ok: true,
            message: "Index api of ona backend.",
        });
    }
}

export interface IIndexController {
    getIndex: (_req: Request, res: Response) => Response;
}

export default IndexController;
