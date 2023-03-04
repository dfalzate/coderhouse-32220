import { Router } from "express";
import productController from "../controllers/product.controller.js";

class UserRouter {
  constructor() {
    this.expressRouter = Router();
    this.expressRouter.post("/", productController.create);
    this.expressRouter.get("/:id", productController.getOne);
    this.expressRouter.get("/", productController.getMany);
    this.expressRouter.put("/:id", productController.update);
    this.expressRouter.delete("/:id", productController.delete);
  }

  getRouter() {
    return this.expressRouter;
  }
}

export default new UserRouter();
