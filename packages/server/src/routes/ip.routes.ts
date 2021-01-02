import { IRouter, Router } from "express";
import IpController from "../controllers/ip.controller";
import authenticated from "../middlewares/Auth";

class IpRouter {
    public _router: IRouter
    private _ipController: IpController

    constructor(){
        this._router = Router()
        this._ipController = new IpController


        this.initRoutes()
    }

    private initRoutes(){
        this._router.get('/', authenticated, this._ipController.test)
    }
}

export default IpRouter