import { IRouter, Router } from "express";
import passport from "passport";
import IpController from "../controllers/ip.controller";

class IpRouter {
    public _router: IRouter
    private _ipController: IpController

    constructor(){
        this._router = Router()
        this._ipController = new IpController


        this.initRoutes()
    }

    private initRoutes(){
        this._router.post(
            '/saveSearch', 
            passport.authenticate("jwt", {session: false}), 
            this._ipController.newSearch
        )

        this._router.get(
            '/Searchs', 
            passport.authenticate("jwt", {session: false}), 
            this._ipController.getSearchs
        )
    }
}

export default IpRouter