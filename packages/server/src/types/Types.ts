import {Response, Request} from 'express'

export interface MyRequest {
    header: any;
    user: any;
    req: Request & {
        user: any
    }
}

export interface MyResponse {
    status: any;
    res: Response & {
        user: any
    }
}