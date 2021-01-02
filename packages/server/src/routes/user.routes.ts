import { IRouter, Router } from "express";
import UserController from "../controllers/user.controller";

class UserRouter {
    public _router: IRouter
    private _userController: UserController
    constructor() {
        this._router = Router()
        this._userController = new UserController
        this.initRoutes()
    }

    private initRoutes(): void{
        this._router.post('/register', this._userController.register)
    }
}

export default UserRouter