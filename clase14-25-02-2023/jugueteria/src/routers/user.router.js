import { Router } from "express";
import userController from "../controllers/user.controller.js";

class UserRouter {
  constructor() {
    this.expressRouter = Router();
    this.expressRouter.post("/", userController.createUser);
    this.expressRouter.get("/", userController.getUser);
    // this.getRouter = this.getRouter.bind(this);
  }

  getRouter() {
    return this.expressRouter;
  }
}

export default new UserRouter();
