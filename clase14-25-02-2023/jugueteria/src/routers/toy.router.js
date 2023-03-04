import { Router } from "express";
import toyController from "../controllers/toy.controller.js";

class ToyRouter {
  constructor() {
    this.expressRouter = Router();
    this.expressRouter.post("/", toyController.createToy);
    this.expressRouter.get("/", toyController.getToy);
    this.expressRouter.get("/:referencia", toyController.getToys);
    // this.getRouter = this.getRouter.bind(this);
  }

  getRouter() {
    return this.expressRouter;
  }
}

export default new ToyRouter();
