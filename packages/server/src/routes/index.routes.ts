import { Router, IRouter } from "express";
import IndexController, {
  IIndexController,
} from "../controllers/index.controller";

class IndexRouter {
  public _router: IRouter;
  private _indexController: IIndexController;

  constructor() {
    this._router = Router();
    this._indexController = new IndexController();

    this.initRoutes();
  }

  private initRoutes(): void {
    this._router.get("/", this._indexController.getIndex);
  }
}

export default IndexRouter;
