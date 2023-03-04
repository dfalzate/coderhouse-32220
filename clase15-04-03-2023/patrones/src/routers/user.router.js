import { Router } from "express";
import userController from "../controllers/user.controller.js";

class UserRouter {
  constructor() {
    this.expressRouter = Router();
    this.expressRouter.post("/", userController.createUser);
    this.expressRouter.get("/:email", userController.getUser);
  }

  getRouter() {
    return this.expressRouter;
  }
}

export default new UserRouter();
