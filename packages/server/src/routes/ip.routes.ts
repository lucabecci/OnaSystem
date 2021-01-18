import { IRouter, Router } from "express";
import passport from "passport";
import IpController from "../controllers/ip.controller";

class IpRouter {
  public _router: IRouter;
  private _ipController: IpController;

  constructor() {
    this._router = Router();
    this._ipController = new IpController();

    this.initRoutes();
  }

  private initRoutes() {
    this._router.post(
      "/create",
      passport.authenticate("jwt", { session: false }),
      this._ipController.newSearch
    );

    this._router.get(
      "/search",
      passport.authenticate("jwt", { session: false }),
      this._ipController.getSearchs
    );

    this._router.get(
      "/search/:id",
      passport.authenticate("jwt", { session: false }),
      this._ipController.getSearch
    );

    this._router.delete(
      "/delete/:id",
      passport.authenticate("jwt", { session: false }),
      this._ipController.deleteSearch
    );

    this._router.delete(
      "/delete",
      passport.authenticate("jwt", { session: false }),
      this._ipController.deleteAll
    );
    
    this._router.get(
      '/user-ip',
      this._ipController.getUserIP
    )
  }
}

export default IpRouter;
