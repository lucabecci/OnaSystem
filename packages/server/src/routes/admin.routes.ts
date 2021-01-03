import { IRouter, Router } from "express";
import { IsAdmin } from "../middlewares/IsAdmin";
import AdminController from "../controllers/admin.controller";

class AdminRouter {
  public _router: IRouter;
  private _adminController: AdminController;
  constructor() {
    this._router = Router();
    this._adminController = new AdminController();

    this.initRoutes();
  }

  private initRoutes() {
    this._router.get("/users", IsAdmin, this._adminController.getUsers);

    this._router.get("/users/:id", IsAdmin, this._adminController.getUser);

    this._router.delete(
      "/users/:id",
      IsAdmin,
      this._adminController.deleteUser
    );
  }
}

export default AdminRouter;
