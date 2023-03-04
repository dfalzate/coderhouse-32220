import { Router } from "express";
import businessController from "../controllers/business.controller.js";

class UserRouter {
  constructor() {
    this.expressRouter = Router();
    this.expressRouter.post("/", businessController.create);
    this.expressRouter.get("/:id", businessController.getOne);
    this.expressRouter.get("/", businessController.getMany);
    this.expressRouter.put("/:id", businessController.update);
    this.expressRouter.delete("/:id", businessController.delete);
  }

  getRouter() {
    return this.expressRouter;
  }
}

export default new UserRouter();
