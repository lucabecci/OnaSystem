import { IRouter, Router } from "express";
import passport from "passport";
import SpeedController from "../controllers/speed.controller";

class SpeedRouter {
  public _router: IRouter;
  private _speedController: SpeedController;

  constructor() {
    this._router = Router();
    this._speedController = new SpeedController();

    this.initRoutes();
  }

  private initRoutes(): void {
    this._router.post(
      "/create",
      passport.authenticate("jwt", { session: false }),
      this._speedController.createSpeed
    );

    this._router.get(
      "/all",
      passport.authenticate("jwt", { session: false }),
      this._speedController.getSpeeds
    );

    this._router.get(
      "/all/:id",
      passport.authenticate("jwt", { session: false }),
      this._speedController.getSpeed
    );

    this._router.delete(
      "/delete/:id",
      passport.authenticate("jwt", { session: false }),
      this._speedController.deleteSpeed
    );

    this._router.delete(
      "/delete",
      passport.authenticate("jwt", { session: false }),
      this._speedController.deleteAll
    );
  }
}

export default SpeedRouter;
