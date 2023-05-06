import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

class UserRouter {
  constructor() {
    this.router = Router();
    this.router.post("/", userController.create);
  }
  getRouter() {
    return this.router;
  }
}

export const userRouter = new UserRouter();
